import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input()
  public count = 0;
  constructor() {}

  ngOnInit() {}

  public vote() {
    this.count++;
  }
}
