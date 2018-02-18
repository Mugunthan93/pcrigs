import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RigComponent } from './rig/rig.component';
import { HeaderComponent } from './header/header.component';
import { RigListComponent } from './rig/rig-list/rig-list.component';
import { RigDetailComponent } from './rig/rig-detail/rig-detail.component';
import { RigPartComponent } from './rig/rig-list/rig-part/rig-part.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartEditComponent } from './cart-list/cart-edit/cart-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LogComponent } from './services/log.component';
import { CartService } from './shared/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    RigComponent,
    HeaderComponent,
    RigListComponent,
    RigDetailComponent,
    RigPartComponent,
    CartListComponent,
    CartEditComponent,
    DropdownDirective,
    LogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
