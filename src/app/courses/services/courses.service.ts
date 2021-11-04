import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs/operators';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '../../../assets/courses.json';

  constructor(private httpCliente: HttpClient) {}

  list() {
    return this.httpCliente.get<Course[]>(this.API).pipe(delay(2000), first());
  }
}
