import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-second-component',
  templateUrl: './example-second-component.component.html',
  styleUrls: ['./example-second-component.component.scss']
})
export class ExampleSecondComponentComponent implements OnInit {

  value;
  removeComponent;

  constructor() { }

  ngOnInit() {
  }

}
