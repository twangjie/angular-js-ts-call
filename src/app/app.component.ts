import {Component, OnInit} from '@angular/core';
import {TSClass} from "./TSClass";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-js-ts-call';

  tsClass = new TSClass();

  clicked = 0;

  constructor() {
  }

  ngOnInit(): void {
    // https://bbs.egret.com/thread-16800-1-1.html
    window['tsClass'] = this.tsClass; //这步不能少
  }

  onTsClick() {
    this.clicked++;

    // eval("multiply()")
    this.clicked = window.multiply(this.clicked,2);
  }
}
