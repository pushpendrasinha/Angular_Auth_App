import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsUrl = "http://localhost:3000/api/events";
  specialEventsUrl = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
  	return this.http.get<any>(this.eventsUrl);
  }

  specialEvents() {
  	return  this.http.get<any>(this.specialEventsUrl);
  }


}
