import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { relative } from 'path';

@Component({
  selector: 'app-main-mune',
  templateUrl: './main-mune.component.html',
  styleUrls: ['./main-mune.component.css']
})
export class MainMuneComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  publicSatistic: boolean = true;

  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  basel() {
    this.publicSatistic = false;
    this._router.navigate(['prdoct-details'], { relativeTo: this._route })
  }
}
