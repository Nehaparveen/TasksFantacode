import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewdoComponent } from './newdo/newdo.component';
import { AdddoComponent } from './adddo/adddo.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

 // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    NewdoComponent,
    AdddoComponent,
    MainComponent,
    ListComponent,
    EditComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
