import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit 
{
  num:number=101;
  constructor() { }

  ngOnInit() {
  }

}
