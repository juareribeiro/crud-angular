import { Component, OnInit } from '@angular/core';

import { Course } from './models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id:'1', name: 'Angular', category:'Front'},
    {_id:'2', name: 'React', category:'Front'},
    {_id:'3', name: '.net 5', category:'Back'},
    {_id:'4', name: 'Spring', category:'Back'},
  ];

  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
