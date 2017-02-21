import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
   AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
   AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;

  @ContentChild('boundContent') boundContent: HTMLElement;

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
    console.log(this.boundContent);
  }

  ngAfterViewInit() {
    this.log('AfterViewInit');
    console.log(this.boundParagraph);
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
