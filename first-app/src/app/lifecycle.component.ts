import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
   AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <p>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
   AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() bindable = 1000;

  constructor() { }

  ngOnInit() {
    this.log('OnInit');
  }

  ngOnChanges() {
    this.log('onChanges');
  }

  ngDoCheck() {
    this.log('DoCheck');
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked');
  }

  ngAfterContentInit() {
    this.log('AfterContentInit');
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('AfterViewChecked');
  }

  ngOnDestroy(){
    this.log('OnDestroy');
  }

  private log(hook: string)  {
    console.log(hook);
  }
}
