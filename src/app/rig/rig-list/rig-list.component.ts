import { Component, OnInit } from '@angular/core';
import { Rig } from '../rig.model';
import { RigService } from '../rig.service';
@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {
  rigs: Rig[] = [];


  constructor(private rigService: RigService) { }

  ngOnInit() {
    this.rigs = this.rigService.getRigs();
  }

}
