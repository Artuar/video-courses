import { Injectable } from '@angular/core';

import {BehaviorSubject, Subject} from 'rxjs';
import {Course, CourseClass} from './Course';

const COURSES_LIST = [
  {
    id: 0, title: 'Java course', creation_date: 1530910800000, duration: 88, top_rated: true,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
    'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
    'leap into electronic typesetting, remaining essentially unchanged. It ...'
  },
  {
    id: 1, title: 'Javascript course', creation_date: 1546207200000, duration: 48, top_rated: true,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
    'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
    'leap into electronic typesetting, remaining essentially unchanged. It ...'
  },
  {
    id: 4, title: 'NodeJs course', creation_date: 1530910800000, duration: 1, top_rated: false,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
    'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
    'leap into electronic typesetting, remaining essentially unchanged. It ...'
  },
  {
    id: 2, title: 'Python course', creation_date: 1526763600000, duration: 28, top_rated: false,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
    'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
    'leap into electronic typesetting, remaining essentially unchanged. It ...'
  },
  {
    id: 3, title: 'Kotlin course', creation_date: 1526677200000, duration: 12, top_rated: false,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
    'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
    'leap into electronic typesetting, remaining essentially unchanged. It ...'
  }
];

@Injectable()
export class CoursesService {
  private coursesList: Course[];

  private coursesSubject: BehaviorSubject<Course[]>;

  constructor() {
    this.coursesList = COURSES_LIST;
  }

  public getCoursesList() {
    this.coursesSubject = new BehaviorSubject(this.coursesList);
    return this.coursesSubject;
  }

  public deleteCourse(id: number) {
    this.coursesList = this.coursesList.filter(course => id !== course.id);
    this.coursesSubject.next(this.coursesList);
  }

  public saveCourse(courseProps)  {
    if (this.coursesList.some(course => course.id === courseProps.id)) {
      this.coursesList.forEach((course, index) => {
        if (course.id === courseProps.id) {
          this.coursesList[index] = courseProps;
        }
      });
    } else {
      const newCourse = new CourseClass(
        new Date().getTime(),
        courseProps.title,
        new Date().getTime(),
        courseProps.duration,
        courseProps.description,
        Math.random() < 0.5,
      );
      this.coursesList.push(newCourse);
    }
    this.coursesSubject.next(this.coursesList);
  }
}
