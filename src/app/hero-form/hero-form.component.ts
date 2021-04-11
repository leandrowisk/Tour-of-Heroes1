import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { Hero, HeroUniverse } from '../hero';
import { HeroService } from '../hero.service';
import { Expression } from '@angular/compiler';



@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent implements OnInit{

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
    let hero: Hero = this.formulario.value;
    if (hero.id) {
      this.heroService.updateHero(hero)
      .subscribe(() => this.heroSaved.emit());
    } else {
      this.heroService.addHero(hero)
      .subscribe(() => this.heroSaved.emit());
    }
}

    ngOnInit(){

         this.formulario = this.formBuilder.group({
         name: [this.hero.name,[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
         id: [this.hero.id],
         description: [this.hero.description, Validators.minLength(3)],
         imageUrl: [this.hero.imageUrl, Validators.required],
         universe: [this.hero.universe]
      
  });
    }
}