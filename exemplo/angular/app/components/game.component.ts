import { Component, OnInit } from '@angular/core';

import { WebSocketsService} from '../services/websockets.service'

@Component({
  moduleId: module.id,
  selector: 'game',
  templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit {
  boards: any[];
  log:any[];
  constructor(private websocketsService:WebSocketsService) {

    this.log = [];
   }

  ngOnInit() {
    this.websocketsService.getBoard().subscribe((data) => {
      this.boards = data;
      console.log(this.boards);
    });

    this.websocketsService.getLog().subscribe((data) => {
      this.log.push(data);
    });


  }
}
