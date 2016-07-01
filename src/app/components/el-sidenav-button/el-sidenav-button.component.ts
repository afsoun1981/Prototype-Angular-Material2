/// <reference path="../../../typings.d.ts" />
import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'el-sidenav-button',
  templateUrl: 'el-sidenav-button.component.html',
  styleUrls: ['el-sidenav-button.component.css'],
  directives: [MdButton]
})
export class ElSidenavButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  	console.log("test");
  }

}
