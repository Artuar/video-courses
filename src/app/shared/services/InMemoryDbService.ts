import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      {
        id: 0, title: 'Java course', creation_date: '05.29.2018', duration: '1h 28m',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
        'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
        'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
        'leap into electronic typesetting, remaining essentially unchanged. It ...'
      },
      {
        id: 1, title: 'Javascript course', creation_date: '05.25.2018', duration: '48m',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
        'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
        'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
        'leap into electronic typesetting, remaining essentially unchanged. It ...'
      },
      {
        id: 2, title: 'Python course', creation_date: '05.20.2018', duration: '28m',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
        'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
        'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
        'leap into electronic typesetting, remaining essentially unchanged. It ...'
      },
      {
        id: 3, title: 'Kotlin course', creation_date: '05.19.2018', duration: '12m',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
        'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
        'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
        'leap into electronic typesetting, remaining essentially unchanged. It ...'
      },
      {
        id: 4, title: 'NodeJs course', creation_date: '05.09.2018', duration: '1m',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' +
        'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of ' +
        'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ' +
        'leap into electronic typesetting, remaining essentially unchanged. It ...'
      }
    ];
    const user = {
      id: 100500,
      firstName: 'Artur',
      lastName: 'Rieznik'
    };
    return { courses, user };
  }
}
