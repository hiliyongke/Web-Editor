import { Component, OnInit } from '@angular/core';
import { BasicComponent } from './node_modules/src/app/component/dev/basic/basic/basic.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent  extends BasicComponent  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }

}
