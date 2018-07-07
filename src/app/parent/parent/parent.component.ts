import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  spacing: number;
  length: number;

  constructor() { }

  ngOnInit() {
  }

  getData(message: any) {
    this.spacing = message.Spacing;
    this.length = message.DLarge;
    console.log(this.spacing);
    console.log(this.length);
  }
}
