import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Part } from '../../shared/part';

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

  @Output()
  partAdded = new EventEmitter<Part>();
  constructor() { }

  ngOnInit() {
  }

  onPartAdded() {
    const part =  new Part(
      this.nameEl.nativeElement.value,
      this.amountEl.nativeElement.value);
      this.partAdded.emit(part);
  }
}
