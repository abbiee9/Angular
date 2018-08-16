import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit 
{
  ename:string;
  eid:string;
  sal:number;
  constructor() 
  { 
    this.ename='Abbiee';
    this.eid='0706G7';
    this.sal=25000;

  }

  ngOnInit()
  {

  }

}
