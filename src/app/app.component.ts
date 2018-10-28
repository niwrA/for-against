import { Component } from '@angular/core';
import { Statement } from './statement/statement';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForAgainst';
  statement = new Statement(
    'Environment: recyclable plastic cup better than ceramic cup?',
    'Is a recycable plastic cup better for the environment than a ceramic cup in dishwasher,' +
    'considering for instance the resources needed for creating, transporting and recycling a plastic' +
    'cup versus creating, transporting and cleaning a ceramic cup?'
  );
}
