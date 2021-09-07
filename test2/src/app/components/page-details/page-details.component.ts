import { Component, OnInit } from '@angular/core';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  size: NzDescriptionsSize = 'default';
  array = ['../../../assets/headset.jpg', '../../../assets/headset.jpg'];
}
