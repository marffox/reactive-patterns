import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store, Observer } from 'app/event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;

  ngOnInit() {
    console.log('lesson counter component is registered as observer ..');
    store.subscribe(this);
  }

  next(data: Lesson[]) {
      console.log('counter component received data ..');
      this.lessonsCounter = data.length;
  }
}
