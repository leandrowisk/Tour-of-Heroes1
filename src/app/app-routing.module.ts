import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroNewComponent } from './hero-new/hero-new.component';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes=[
   {path:'',redirectTo:'./dashboard',pathMatch:'full'},
   {path: 'edit/:id ', component:HeroEditComponent},
   {path: 'heroes', component: HeroesComponent},
   {path:'detail/:id ',component:HeroDetailComponent},
   {path:'dashboard',component:DashboardComponent},
   {path:'new',component:HeroNewComponent},
  
];

@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
