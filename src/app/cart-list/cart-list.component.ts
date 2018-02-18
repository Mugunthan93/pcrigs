import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  parts = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.parts = this.cartService.getParts();
    
    this.cartService.newPartAdded.subscribe(() => {
      this.parts = this.cartService.getParts();
    });
  }

}
