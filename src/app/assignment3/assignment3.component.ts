import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})

export class Assignment3Component implements OnInit {
  show : boolean = false;
  logs = [];
  no = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.show = !this.show;
    this.no += 1;
    this.logs.push(this.no);
  }
}
