import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { Hero, HeroUniverse } from '../hero';
import { HeroService } from '../hero.service';





@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  @Input() hero: Hero;
  @Output() heroSaved: EventEmitter<void> = new EventEmitter<void>();
  @Output() goBack: EventEmitter<void> = new EventEmitter<void>();


  heroUniverses: Array<HeroUniverse> = [HeroUniverse.DC, HeroUniverse.MARVEL];

  formulario: FormGroup;
  

  constructor(private heroService: HeroService,private formBuilder: FormBuilder) { }
  onGoBack(): void{
    this.goBack.emit();
  }

  save(): void {

    if (this.hero.id){
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.heroSaved.emit());
  }else{
    this.heroService.addHero(this.hero)
    .subscribe(() => this.heroSaved.emit());
  }
}

    OnInit(){

        this.formulario = this.formBuilder.group({
        name: [this.hero.name, Validators.required, Validators.nullValidator],
        description: [this.hero.description],
        imageUrl: [this.hero.imageUrl,Validators],
        universe: [this.hero.universe]
  });
    }
}