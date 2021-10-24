import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpCliente: HttpClient) { }

  list(): Course[] {
    return [
      {_id:'1', name: 'Angular', category:'Front'},
      {_id:'2', name: 'React', category:'Front'},
      {_id:'3', name: '.net 5', category:'Back'},
      {_id:'4', name: 'Spring', category:'Back'},
    ];
  }
}
