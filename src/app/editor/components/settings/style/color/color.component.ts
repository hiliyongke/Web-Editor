import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/editor/dev/comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
