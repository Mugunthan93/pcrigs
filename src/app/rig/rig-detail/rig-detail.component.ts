import { Component, OnInit, Input } from '@angular/core';
import { Rig } from '../rig.model';

@Component({
  selector: 'app-rig-detail',
  templateUrl: './rig-detail.component.html',
  styleUrls: ['./rig-detail.component.css']
})
export class RigDetailComponent implements OnInit {
  @Input()
  rig: Rig;
  constructor() { }

  ngOnInit() {
  }

}
