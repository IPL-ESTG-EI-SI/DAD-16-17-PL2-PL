import { Component } from '@angular/core';

import { AuthService } from './auth.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    username:string
    password:string
    players:any[] =[]
    user:any
    constructor(private authService :AuthService){}

    loginClick(){
        this.authService.login(this.username,this.password)
            .subscribe((user) => {
                this.user = user
                this.authService.getPlayers()
                .subscribe(players=>this.players = players);
        })
    }

 }
