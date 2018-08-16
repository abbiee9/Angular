import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ooty',
  templateUrl: './ooty.component.html',
  styleUrls: ['./ooty.component.css']
})
export class OotyComponent implements OnInit
{
  @Input() name:string;
  constructor() 
  { 

  }

  ngOnInit()
   {
  }

}
