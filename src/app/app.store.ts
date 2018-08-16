import {Course} from './courses-list/Course';
import {User} from './core/services/User';

export interface AppStore {
  courses: Course[];
  thereAreMore: boolean;
  user: User;
}
