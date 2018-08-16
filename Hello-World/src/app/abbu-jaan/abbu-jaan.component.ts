import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abbu-jaan',
  templateUrl: './abbu-jaan.component.html',
  styleUrls: ['./abbu-jaan.component.css']
})
export class AbbuJaanComponent implements OnInit
 {
    name:string[];
    age:number;

  constructor() 
  { 
      this.name=['Abu','Talha','Siddiqi','Abbiee'];
      this. age=22;
  }

  ngOnInit() {
  }

}
