import { Component, OnInit } from '@angular/core';
interface Person {
  types: number;
  amount: string;
  SalesW: string;
  SalesM: string;
  address: string
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  listOfData: Person[] = [
    {
      types: 58,
      amount: 'John Brown',
      SalesW: '400$',
      SalesM: '5000$',

      address: 'more details'
    }
    // ,
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park'
    // },
    // {
    //   key: '3',
    //   name: 'Joe Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park'
    // }
  ];

}
