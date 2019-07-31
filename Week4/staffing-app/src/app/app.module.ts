import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffsComponent,
    StaffDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
