import { Component, OnInit, ElementRef, ViewChild from '@angular/core';
import { Part } from '../../shared/part';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent implements OnInit {
  @ViewChild('partName')
  nameEl: ElementRef;
  @ViewChild('partAmount')
  amountEl: ElementRef;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onPartAdded() {
    const part =  new Part(
      this.nameEl.nativeElement.value,
      this.amountEl.nativeElement.value);
      this.cartService.addPart(part);
  }
}
