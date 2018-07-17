import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from './Course';
import {CoursesService} from './courses.service';
import {FilterByPipe} from './filter-by.pipe';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {ModalWindowComponent} from '../shared/components/modal-window/modal-window.component';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [ FilterByPipe ]
})
export class CoursesPageComponent implements OnInit {
  @ViewChild(ToolboxComponent) toolBox: ToolboxComponent;
  @ViewChild(ModalWindowComponent) modal: ModalWindowComponent;

  public courses: Course[] = [];
  public filteredCourses: Course[];
  public loader = false;

  constructor(
    private coursesService: CoursesService,
    private filterBy: FilterByPipe
  ) {}

  ngOnInit() {
    this.coursesService.coursesSubject
      .subscribe(
        courses => {
          this.courses = courses;
          this.toolBox.onSearch();
          console.log('Courses', courses);
          this.loader = false;
        },
        () =>  {
          console.error('Error');
          this.loader = false;
        });
    this.getCourses();
  }

  search(searchString: string) {
    // this.getCourses(searchString);
    this.filteredCourses = this.filterBy.transform(
      this.courses,
      'title',
      searchString
    ) as Course[];
  }

  addCourse() {
    const newCourse = {
      title: '',
      duration: 0,
      description: '',
      edit: true,
      new_course: true
    };
    this.filteredCourses.unshift(newCourse as Course);
  }

  private getCourses() {
    this.loader = true;
    this.coursesService.getCoursesList();
  }

  onDeleteCourse(course: Course) {
    this.modal.show({
      title: `Delete course`,
      message: `Do you really want to delete course '${course.title}'?`,
      buttonText: 'Delete',
      buttonAction: () => {
        this.coursesService.deleteCourse(course.id);
      }
    });
  }

  onEditCourse({course, isEdit}) {
    if (course.new_course && !isEdit) {
      this.filteredCourses = this.filteredCourses.filter(filteredCourse =>
        course.id !== filteredCourse.id
      );
    } else {
      this.filteredCourses.forEach(filteredCourse => {
        filteredCourse.edit = course.id === filteredCourse.id && isEdit;
      });
    }
  }

  onSaveCourse(course) {
    this.loader = true;
    this.coursesService.saveCourse(course);
  }

  loadMore() {
    console.log(`Click on Load More`);
  }
}
