import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

//var io = require('socket.io-client');

import * as io from 'socket.io-client';


@Injectable()
export class WebSocketsService {

  socket:any;
  constructor() {
    if(!this.socket){
      this.socket = io('http://localhost:7777');
    }
   }


   getBoard():Observable<any[]>{
     return new Observable((observer:any) => {
        this.socket.on('board', (data:any) => {
            observer.next(data);
        });
      });
   }

   getLog():Observable<any[]>{
     return new Observable((observer:any) => {
        this.socket.on('log', (data:any) => {
            observer.next(data);
        });
      });
   }

   sendClick(data:any){
     this.socket.emit('click',data);
   }
}
