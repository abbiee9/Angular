import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';
  num:number=500.296;
  name:any='abu talha siddiqi';
  dob=new Date();
}
