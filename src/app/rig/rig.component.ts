import { Component, OnInit } from '@angular/core';
import { Rig } from './rig.model';

@Component({
  selector: 'app-rig',
  templateUrl: './rig.component.html',
  styleUrls: ['./rig.component.css']
})
export class RigComponent implements OnInit {
  selectedRig: Rig;
  constructor() { }

  ngOnInit() {
  }
  onRigSelectedOnApp(rig: Rig) {
    this.selectedRig = rig;
  }
}
