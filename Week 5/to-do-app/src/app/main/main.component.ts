import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { EntryService }  from '../entry.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  show: Boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter();

  
  // @Input() entry:Entry;
  // @Output() deleteTodo : EventEmitter <Entry> = new EventEmitter ;

  constructor( private entryService : EntryService ) { }
  
  entries:Entry[];

  ngOnInit() {
    this.entryService.getEntries().subscribe(entries => {
      this.entries=entries;
    });
  }
    

  AddButton() {
    console.log("Add button is clicked.");
    this.show=true;


  }

  AddClosed() {
    this.show = false;
  }
  deleteEntry(entry : Entry)
        {
    console.log(entry,'ghj');
   // Delete from UI
    this.entries = this.entries.filter(t => t.id !== entry.id)
    // Delete from Server
    this.entryService.deleteEntry(entry).subscribe();
    console.log(this.entries);
}

addEntry(entry : Entry){
     this.entryService.addEntry(entry).subscribe(entry =>{
     this.entries.push(entry);
     console.log(this.entries)
  });
}

}

  
