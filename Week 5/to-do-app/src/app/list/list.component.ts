import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { EntryService } from "../entry.service";

// import { ENTRIES } from '../mock-data';
import { Entry } from "../Entry";

// import { Entry } from '../entry';
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = "Show";
  entries: Entry[];

  @Input() entry: Entry;
  @Output() deleteEntry: EventEmitter<Entry> = new EventEmitter();

  selectedEntry: Entry;
  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.getEntries();
  }

  onSelect(entry: Entry): void {
    this.selectedEntry = entry;
  }


  toggle() {
    this.show = !this.show;
  }
  getEntries(): void {
    this.entryService
      .getEntries()
      .subscribe(entries => (this.entries = entries));
  }
  AddClosed() {
    this.selectedEntry = null;
  }
  
editEntry(entry : Entry){
  this.entryService.editEntry(entry,entry.id).subscribe(entry =>{
    console.log(this.entries)
  });
}
  onToggle(entry) {
    // Toggle on UI
    entry.completed = !entry.completed;
    console.log("toggle");
    // Toggle on Server
    this.entryService
      .toggleCompleted(entry)
      .subscribe(todo => console.log(entry));
  }
  onDelete(entry) {
    this.deleteEntry.emit(entry);
    console.log("delete");
  }
}
