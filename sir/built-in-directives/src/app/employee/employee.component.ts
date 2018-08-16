import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  dept: string[];
  emp: Object[];
  empByDept: Object;

  constructor() {
  };

  ngOnInit() {
    this.dept = ['L&K', 'R&D', 'Call centre'];
    this.emp = [
      { ename: 'Abu', eid: 6002, sal: 25000 },
      { ename: 'Dileep', eid: 6001, sal: 25001 }
    ];
    this.empByDept = [
      {
        dept: 'L&K',
        emp: [
          { ename: 'Abu', eid: 6002},
          { ename: 'Apuroop', eid: 6003}
        ]
      },
      {
        dept: 'R&D',
        emp: [
          { ename: 'Dileep', eid: 6001},
          { ename: 'Ranjan', eid: 6004}
        ]
      }
    ];
    
  }

}

