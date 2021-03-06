import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from '../Course';
import {CoursesService} from '../courses.service';
import {FilterByPipe} from '../../shared/pipes/filter-by.pipe';
import {ToolboxComponent} from './toolbox/toolbox.component';
import {ModalWindowComponent} from '../../shared/components/modal-window/modal-window.component';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppStore} from '../../app.store';

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
  public loader = false;
  public thereAreMore = true;
  public searchString = '';

  constructor(
    private store: Store<AppStore>,
    private coursesService: CoursesService,
    private router: Router
  ) {
    if (store) {
      store.subscribe( reduxStore => {
        const str = reduxStore['store'];
        if (str) {
          this.courses = str.courses;
          this.thereAreMore = str.thereAreMore;
        }
        this.loader = false;
      }, () =>  {
        console.error('Error');
        this.loader = false;
      });
    }
  }

  ngOnInit() {
    if (!this.courses.length) {
      this.getCoursesList(true);
    }
  }

  getCoursesList(fromBeginning?: boolean) {
    this.loader = true;
    this.coursesService.getCoursesList(this.searchString, fromBeginning);
  }

  search(searchString: string) {
    this.searchString = searchString;
    this.getCoursesList(true);
  }

  addCourse($event) {
    this.router.navigateByUrl('courses/new');
  }

  onDeleteCourse(course: Course) {
    this.modal.show({
      title: `Delete course`,
      message: `Do you really want to delete course '${course.name}'?`,
      buttonText: 'Delete',
      buttonAction: () => {
        this.loader = true;
        this.coursesService.deleteCourse(course.id);
      }
    });
  }

  onEditCourse({course, isEdit}) {
    this.router.navigateByUrl(`courses/${course.id}`);
  }

  loadMore() {
    this.getCoursesList();
  }
}
