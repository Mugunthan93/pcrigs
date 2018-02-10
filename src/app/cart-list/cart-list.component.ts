import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  parts = [
    new Part('i7 6000K', 1),
    new Part('DDL4 RAM 16GB', 2),
    new Part('Asus Motherboard', 1),
    new Part('Cooling Fan', 4)
  ];
  constructor() { }

  ngOnInit() {
  }

  addToPartList(part: Part) {
    this.parts.push(part);
  }

}
