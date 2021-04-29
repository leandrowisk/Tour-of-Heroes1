import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero, HeroGetResponse} from './hero';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  privatelog(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


   private heroesUrl = 'https://api-default-309921.rj.r.appspot.com';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes(cursor?: string): Observable<HeroGetResponse>{
    return this.http.get<HeroGetResponse>(`${this.heroesUrl}/heroes?cursor=${cursor || ''}`)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<HeroGetResponse>('getHeroes', {heroes: [], cursor: undefined}))
      
    );

      
}
  getAleatoryHeroes(): Observable<HeroGetResponse>{

     return this.http.get<HeroGetResponse>(`${this.heroesUrl}/top-heroes`)
     .pipe(
      tap(_ => this.log('feched heroes')),
      catchError(this.handleError<HeroGetResponse>('getAleatoryHeroes', {heroes: [], cursor: ''}))
    );
    }

getHeroNo404<Data>(id: string) : Observable<Hero>{
  const url = `${this.heroesUrl}/hero/${id}`;
  return this.http.get<Hero[]>(url).pipe(
    map(heroes => heroes[0]),
    tap(h => {
      const outcome= h ? `fetched` : `did not find`;
      this.log(`${outcome} hero id=${id}`);
    }),
    catchError(this.handleError<Hero>(`getHero id=${id}`))

  );
}

  getHero(id: string|null): Observable<Hero>{

    const url = `${this.heroesUrl}/hero/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))      
    );
    
  }

  

  updateHero(hero: Hero): Observable<any> {
    const heroParams = {hero: hero};

    return this.http.post(`${this.heroesUrl}/hero/${hero.id}`, heroParams, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
}
addHero(hero: Hero): Observable<Hero> {

  const heroParams = {hero: hero};
 return this.http.post<Hero>(`${this.heroesUrl}/heroes`, heroParams, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}

/** DELETE: delete the hero from the server */
deleteHero(id: string): Observable<Hero> {

  const url = `${this.heroesUrl}/hero/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}

/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

 /** Log a HeroService message with the MessageService */
 private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
}
