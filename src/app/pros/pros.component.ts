import { Component, OnInit } from '@angular/core';
import { Pro } from '../pro/pro';

@Component({
  selector: 'app-pros',
  templateUrl: './pros.component.html',
  styleUrls: ['./pros.component.css']
})
export class ProsComponent implements OnInit {
  public pros = new Array<Pro>();
  constructor() {}

  ngOnInit() {
    this.pros.push(new Pro('It\'s light and easy'));
  }
  add(title: string) {
    this.pros.push(new Pro(title));
  }
}
