import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[]=[];


  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.HeroService.getAleatoryHeroes().subscribe(heroes=> this.heroes=heroes.heroes.slice(1,5));

  }

}
