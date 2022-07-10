import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  Properties: Array<any> = [
    {
      'id': 1,
      Name: 'county',
      Type: 'house',
      Price: 123,
    },
    {
      Id: 2,
      Name: 'county',
      Type: 'house',
      Price: 234,
    },
    {
      Id: 3,
      Name: 'county',
      Type: 'home',
      Price: 456,
    },
    {
      Id: 4,
      Name: 'county',
      Type: 'town',
      Price: 457,
    },
    {
      Id: 5,
      Name: 'county',
      Type: 'house',
      Price: 7457,
    },
  ];

  ngOnInit(): void {
  }

}
