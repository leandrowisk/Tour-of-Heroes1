import { NgModule} from '@angular/core';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule} from './app-routing.module';
import {MessagesComponent} from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
///import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
///import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HeroNewComponent } from './hero-new/hero-new.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroEditComponent,
    HeroNewComponent,
    HeroFormComponent,
  
    
  ],

  imports: [
    BrowserModule,
    ///HttpClientModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    ///HttpClientInMemoryWebApiModule.forRoot(
      ///InMemoryDataService, { dataEncapsulation: false }
   BrowserAnimationsModule,MatInputModule,MatSelectModule,
    MatCardModule,MatButtonModule,MatIconModule,ReactiveFormsModule
    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
