import { Component, OnInit } from '@angular/core';
import{Location} from '@angular/common';
import { Hero } from '../hero';
import{HeroFormComponent} from '../hero-form/hero-form.component';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.css']
})
export class HeroNewComponent implements OnInit {

  //No comopnente hero-new iremos iniciar o heros com um json em branco
  hero:Hero= {} as Hero;
  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  onGoBack(){

    this.location.back();
  }
  save(){
    this.location.back();
  }
}


