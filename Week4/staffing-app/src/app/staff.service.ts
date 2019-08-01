import { Injectable } from '@angular/core';
import {Staff } from './staff';
import { STAFFS } from './mockstaff';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  getStaffs(): Observable<Staff[]> {
    this.messageService.add('StaffService: fetched staffs');
    return of(STAFFS);
  }
  constructor(private messageService: MessageService) { } 
}
