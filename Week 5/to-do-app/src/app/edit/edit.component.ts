
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Entry } from '../Entry';
import { EntryService }  from '../entry.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  selectedEntry: Entry;
  entries: Entry[];
  // show: Boolean = false;
  @Input() entry: Entry = {title:null, body:null, id:null, userid:null};
  @Input() isedit : boolean = false;

  @Output() close: EventEmitter<any> = new EventEmitter();
  visible: boolean = true;

  @Output() addEntry : EventEmitter<any> = new EventEmitter();
  @Output() editEntry : EventEmitter<any> = new EventEmitter();
  title:string; 
  body:string;
  constructor(private entryService: EntryService) { }


  ngOnInit() {
    // this.getEntries();
  }

  
 OnClose() {
  console.log("close button is clicked.");
  this.close.emit();
}

onSubmit() {
  const entry = {
    title : this.entry.title,
    body : this.entry.body,
    userid:11
  }
  console.log(entry)
  this.addEntry.emit(entry);
}

onedit() {
  const entry = {
    title : this.entry.title,
    body : this.entry.body,
    userid:11,
    id:this.entry.id
  }
  console.log(entry)
  this.editEntry.emit(entry);
}

onSelect(entry: Entry): void {
  this.selectedEntry = entry;
console.log(this.entries)
}


}
  

