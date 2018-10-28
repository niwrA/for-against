import { Component, OnInit, Input } from '@angular/core';
import { Pro } from './pro';
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  @Input() pro: Pro;

  constructor() {}

  ngOnInit() {

  }
}
