import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  navigate = new EventEmitter<string>();

  @Input()
  version = '0.0.1';
  constructor() { }

  ngOnInit() {
  }

  onNavigate(page: string) {
    this.navigate.emit(page);
  }

}
