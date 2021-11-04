import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isloading = true;

  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.coursesService
      .list()
      .pipe(
        catchError((error) => {
          this.onError('Erro ao carregar cursos.');
          return of([]);
        })
      )
      .subscribe((response) => {
        this.courses = response;
        this.isloading = false;
      });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
