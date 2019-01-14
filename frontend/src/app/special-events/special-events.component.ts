import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router }  from '@angular/router'

import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

	SpecislEvents=[]

  constructor(private event: EventsService, private router: Router) { }

  ngOnInit() {
  	this.event.specialEvents()
  		.subscribe (
  			res => this.SpecislEvents = res,
  			err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401)
              this.router.navigate(['/login'])
          }
        }
  			)
  }

}
