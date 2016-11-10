import { Component } from '@angular/core';

import { LeaderboardPlayer } from './leaderboard-player';

import { LeaderboardService } from './leaderboard.service';

@Component({
    moduleId: module.id,
    selector: 'leaderboard',
    templateUrl: 'leaderboard.component.html'
})
export class LeaderboardComponent { 
    leaderboard: LeaderboardPlayer[]

    constructor(private leaderboardService:LeaderboardService){
        // this.leaderboard = [
        //         {name:'Albert Einstein',maxScore:9000,avatar:'https://api.adorable.io/avatars/285/albert.png'},
        //         {name:'Carl Sagan',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/carl.png'},
        //         {name:'Richard Feynman',maxScore:8000,avatar:'https://api.adorable.io/avatars/285/richard.png'}
        //     ];

        this.leaderboardService.getLeaderboard()
            .subscribe((leaderboard) => this.leaderboard = leaderboard);


    }

}
