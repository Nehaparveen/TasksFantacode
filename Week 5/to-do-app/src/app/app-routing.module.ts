import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoComponent } from './adddo/adddo.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'adddo', component: AdddoComponent },
  { path: '', component: MainComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }