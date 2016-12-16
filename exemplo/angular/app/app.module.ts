import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { LoginComponent } from './components/login.component'
import { RegisterComponent } from './components/register.component'
import { BoardComponent } from './components/board.component'
import { GameComponent } from './components/game.component'

import { WebSocketsService} from './services/websockets.service'

let routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'board', component: GameComponent},
]


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BoardComponent,
    GameComponent
  ],
  providers:[ WebSocketsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
