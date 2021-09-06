import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-mune',
  templateUrl: './main-mune.component.html',
  styleUrls: ['./main-mune.component.css']
})
export class MainMuneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
