import { Component, OnInit } from '@angular/core';
import { Con } from '../con/con';

@Component({
  selector: 'app-cons',
  templateUrl: './cons.component.html',
  styleUrls: ['./cons.component.css']
})
export class ConsComponent implements OnInit {
  public cons = new Array<Con>();
  constructor() {}

  ngOnInit() {
    this.cons.push(new Con('It\'s heavy and difficult'));
  }
  add(title: string) {
    this.cons.push(new Con(title));
  }
}
