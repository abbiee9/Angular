import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styles: [],
})
export class DemoFormSkuComponent implements OnInit {
  // eid:number;
  // ename:string;
  // sal:number;

  // constructor() 
  // { 
  //   this.eid=1234;
  //   this.ename='Abbiee';
  //   this.sal=250000;
  // }
 e=new Employee(6002,"Abu",23000);

  ngOnInit() {
  }

  //onSubmit(form: any): void {
   // console.log(' The employee : '+form.ename+","+form.eid);
    //console.log(' The employee : '+this.ename+","+this.eid);
 // }
  // onSubmit(): void {
  //   console.log(' The employee : '+this.ename+","+this.eid);
  // }

  onSubmit(): void {
     console.log(' The employee : '+this.e.eid+","+this.e.ename+" and "+this.e.sal);
    }
}
