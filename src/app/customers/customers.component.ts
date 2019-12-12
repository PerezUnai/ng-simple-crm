import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  isVisible: boolean;

  constructor() { }

  ngOnInit() {
    this.title="Customers";
    this.isVisible = true;



    this.people=[
      {
        id: 1, name: 'Ion Egizu', city: 'Elizondo', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)
      },
      {
        id: 2, name: 'Ane Dou', city: 'Pamplona/Iruña', orderTotal: 19.99, customerSince: new Date(2017,2,22)
      },
      {
        id: 3, name: 'Juan Sin Tierra', city: 'Tudela', orderTotal: 99.99, customerSince: new Date(2019, 10, 13)
      },
      {
        id: 4, name: 'Julia Thomas', city: 'Tafalla', orderTotal: 599.99, customerSince: new Date(2012, 10, 31)
      }
    ];
  }


  changeVisibility() {
    if (this.isVisible){
      this.isVisible = false;
    } 
    else
    {
      this.isVisible = true;
    }
  }

}
