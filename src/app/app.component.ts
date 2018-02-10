import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageToShow = 'rigs';
  appVersion = '1.0.10';
  onNavigateOnApp(page: string) {
    this.pageToShow = page;
  }
}
