import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rig } from '../../rig.model';

@Component({
  selector: 'app-rig-part',
  templateUrl: './rig-part.component.html',
  styleUrls: ['./rig-part.component.css']
})
export class RigPartComponent implements OnInit {
  @Input()
  rig: Rig;
  @Output()
  rigSelect = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onRigSelected() {
    this.rigSelect.emit();
  }

}
