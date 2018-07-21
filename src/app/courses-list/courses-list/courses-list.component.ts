import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from '../Course';
import {CoursesService} from '../courses.service';
import {FilterByPipe} from '../../shared/pipes/filter-by.pipe';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {ModalWindowComponent} from '../../shared/components/modal-window/modal-window.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterByPipe ]
})
export class CoursesListComponent implements OnInit {
  @ViewChild(ToolboxComponent) toolBox: ToolboxComponent;
  @ViewChild(ModalWindowComponent) modal: ModalWindowComponent;

  public courses: Course[] = [];
  public filteredCourses: Course[];
  public loader = false;

  constructor(
    private coursesService: CoursesService,
    private filterBy: FilterByPipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.loader = true;
    this.coursesService
      .getCoursesList()
      .subscribe(
        courses => {
          this.courses = courses;
          this.toolBox.onSearch();
          this.loader = false;
        },
        () =>  {
          console.error('Error');
          this.loader = false;
        });
  }

  search(searchString: string) {
    // this.getCourses(searchString);
    this.filteredCourses = this.filterBy.transform(
      this.courses,
      'title',
      searchString
    ) as Course[];
  }

  addCourse($event) {
    this.router.navigateByUrl('courses/new');
  }

  addCourseWithoutRoute() {
    const newCourse = {
      title: '',
      duration: 0,
      description: '',
      edit: true,
      new_course: true
    };
    this.filteredCourses.unshift(newCourse as Course);
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
    this.router.navigateByUrl(`courses/${course.id}`);
  }

  onEditCourseWithoutRoute({course, isEdit}) {
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
