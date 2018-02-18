import { Component, OnInit } from '@angular/core';
import { Rig } from './rig.model';
import { RigService } from './rig.service';

@Component({
  selector: 'app-rig',
  templateUrl: './rig.component.html',
  styleUrls: ['./rig.component.css'],
  providers: [RigService]
})
export class RigComponent implements OnInit {
  selectedRig: Rig;
  constructor(private rigService: RigService) { }

  ngOnInit() {
    this.rigService.rigSelected.subscribe(
      (rig: Rig) => {
        this.selectedRig = rig;
      }
    );
  }

}
