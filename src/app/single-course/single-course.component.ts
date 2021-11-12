import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from "../courses/courses.interface";

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
