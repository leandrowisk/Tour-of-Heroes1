
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Hero } from '../hero';

@

Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.css']
})
export class HeroNewComponent implements OnInit {

  // No comopnente hero-new iremos iniciar o heros com um json em branco
  hero: Hero = {} as Hero;


  constructor(private location: Location ) { }

  ngOnInit(): void {
  }

  onGoBack(): void {

    this.location.back();
  }
  save(): void {
    this.location.back();
  }
}


