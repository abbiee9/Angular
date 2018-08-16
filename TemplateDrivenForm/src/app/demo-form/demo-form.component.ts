import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit 
{
  eid:number;
  ename:string;
  sal:number;

  constructor() 
  { 
    this.eid=1234;
    this.ename='Abu';
    this.sal=250000;
  }

  ngOnInit() 
  {
  }
  onSubmit(form:any):void
  {
    console.log(' The employee : '+form.ename+","+form.eid);
  }

}
