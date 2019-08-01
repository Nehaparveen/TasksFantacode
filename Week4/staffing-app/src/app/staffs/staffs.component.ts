import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
 
  
  //  staffs = STAFFS;

  selectedStaff: Staff;
  staffs: Staff[];
 
  
  constructor(private staffService: StaffService) { }
  
  ngOnInit() {
    this.getStaffs();
  }

  onSelect(staff: Staff): void {
    this.selectedStaff = staff;
}

getStaffs(): void {
this.staffService.getStaffs().subscribe(staffs => this.staffs = staffs);;
}
}