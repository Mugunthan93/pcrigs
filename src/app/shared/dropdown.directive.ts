import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  isOpen = false;
  constructor() { }

  @HostListener('click')
  onclick() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isOpen = false;
  }
}
