import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  stringInterpolation = 'this is a string';
  numberInterpolation = 2;

  constructor() { }

  ngOnInit() {
  }

  onTest() {
    return true;
  }

  onTestObject() {
    return {redBorder: false};
  }

  aClickHappened(value: string) {
    alert(value);
  }

}
