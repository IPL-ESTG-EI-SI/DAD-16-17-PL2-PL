import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { ImdbMoviesComponent } from './imdb-movies.component';

import { ImdbService } from './imdb.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,ImdbMoviesComponent ],
  providers:    [ ImdbService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
