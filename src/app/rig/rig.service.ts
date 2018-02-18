import { Injectable, EventEmitter } from '@angular/core';
import { Rig } from './rig.model';

export class RigService {
 private rigs: Rig[] = [
    new Rig('Super Gamer 5',
    'This is a console for hardcore gamin',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/AVADirect_God_Mode_Extreme_Gaming_PC.png'),
    new Rig('Xtreme Gamer',
    'This is a console for hardcore gamin',
    'https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2016/08/best-rigs-1.jpg')
  ];

  rigSelected = new EventEmitter<Rig>();
  
  constructor() { }

  getRigs() {
    return this.rigs.slice();
  }
}
