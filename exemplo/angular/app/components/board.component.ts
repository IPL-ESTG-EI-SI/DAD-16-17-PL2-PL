import { Component, OnInit, Input } from '@angular/core';

import { WebSocketsService} from '../services/websockets.service'

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: 'board.component.html'
})
export class BoardComponent implements OnInit {

  @Input()
  board:any
  @Input()
  index:any

  constructor(private websocketsService:WebSocketsService) {
  }

  ngOnInit() {}


  clickHandler(index:number){

    var data = this.board.slice(0);

    data[index]++;
    console.log(data[index])
    this.websocketsService.sendClick({board:data,index:this.index});
  }
}
