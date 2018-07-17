import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user = {
      id: 100500,
      firstName: 'Artur',
      lastName: 'Rieznik'
    };
    return { user };
  }
}
