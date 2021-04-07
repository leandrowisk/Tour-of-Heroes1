import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[]=[];


  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.HeroService.getHeroes().subscribe(heroes=> this.heroes=heroes.slice(1,5));

  }

}
