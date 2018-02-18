import { Component, OnInit, Input } from '@angular/core';
import { Rig } from '../../rig.model';
import { RigService } from '../../rig.service';

@Component({
  selector: 'app-rig-part',
  templateUrl: './rig-part.component.html',
  styleUrls: ['./rig-part.component.css']
})
export class RigPartComponent implements OnInit {
  @Input()
  rig: Rig;

  constructor(private rigService: RigService) { }

  ngOnInit() {
  }

  onRigSelected() {
    this.rigService.rigSelected.emit(this.rig);
  }

}
