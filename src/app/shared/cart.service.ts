import { Injectable, EventEmitter } from '@angular/core';
import { Part } from './part';

@Injectable()
export class CartService {
  private parts: Part[] = [
    new Part('i7 6000K', 1),
    new Part('DDL4 RAM 16GB', 2),
    new Part('Asus Motherboard', 1),
    new Part('Cooling Fan', 4)
  ];

  newPartAdded = new EventEmitter<void>();
  constructor() { }

  getParts() {
    return this.parts.slice();
  }

  addPart(part: Part) {
    this.parts.push(part);
    console.log('parts now', this.parts);
    this.newPartAdded.emit();
  }
}
