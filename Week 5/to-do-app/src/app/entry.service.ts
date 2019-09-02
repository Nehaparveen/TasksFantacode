import { Injectable } from '@angular/core';

import { Entry } from './Entry';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions =
{
 headers : new HttpHeaders({
   'Content-Type': 'application/json'
 })
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  todosLimit = '?_limit=5';



  constructor(
    private http: HttpClient,
  ) { }

/** GET entries from the server */
  getEntries(): Observable<Entry[]> {
  return this.http.get<Entry[]>(`${this.todosUrl}${this.todosLimit}`)


}

/** PUT: delete the hero on the server */
deleteEntry (entry: Entry): Observable<any> {

  const url = `${this.todosUrl}/${entry.id}`
  return this.http.delete<Entry>(url, httpOptions);
}
/** POST: add a new hero to the server */
addEntry (entry : Entry): Observable<Entry> {
  return this.http.post<Entry>(this.todosUrl, entry, httpOptions)
}
/** PUT: edit a new hero to the server */
editEntry (entry : Entry, id : number): Observable<Entry> {
  return this.http.put<Entry>(this.todosUrl + '/' + id, entry, httpOptions)
}

// Toggle Completed

toggleCompleted  (entry : Entry):Observable<any>{
  const url = `${this.todosUrl}/${entry.id}`
  return this.http.put(url,entry,httpOptions);
}




}
