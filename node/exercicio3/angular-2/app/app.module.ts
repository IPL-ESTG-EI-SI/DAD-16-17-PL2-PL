import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';

import { LeaderboardModule } from './leaderboard/leaderboard.module'

@NgModule({
  imports:      [ BrowserModule, LeaderboardModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
