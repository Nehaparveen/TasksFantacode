import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { STAFFS } from '../mockstaff';
@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
 
  
  staffs = STAFFS;
  
  selectedStaff: Staff;
 
  

  constructor() { }

  ngOnInit() {
  }
  onSelect(staff: Staff): void {
    this.selectedStaff = staff;
}
}