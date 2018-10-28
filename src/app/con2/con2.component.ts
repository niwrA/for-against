import { Component, OnInit, Input } from '@angular/core';
import { Con } from './con';
@Component({
  selector: 'app-con',
  templateUrl: './con.component.html',
  styleUrls: ['./con.component.css']
})
export class ConComponent implements OnInit {
  @Input() con: Con;
  constructor() {}

  ngOnInit() {}
}
