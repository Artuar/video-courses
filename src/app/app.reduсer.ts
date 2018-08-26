const DEFAULT_STATE = {
  courses: [],
  authors: [],
  foundedAuthors: []
};

export function appReduсer(state = DEFAULT_STATE, {type, payload}) {
  switch (type) {
    case 'COURSES_LIST':
      return {...state, courses: payload.courses, thereAreMore: payload.thereAreMore};
    case 'ADD_COURSES':
      return {...state, courses: [...state.courses, ...payload.courses], thereAreMore: payload.thereAreMore};
    case 'DELETE_COURSE':
      return {...state, courses: state.courses.filter(course => course.id !== payload)};
    case 'SAVE_COURSE':
      return {...state, courses: [...state.courses,  payload]};
    case 'EDIT_COURSE':
      return {...state, courses: state.courses.map(course => course.id === payload.id ? payload : course)};
    case 'ADD_USER':
      return {...state, user: payload};
    case 'REMOVE_USER':
      return Object.assign({}, state, {user: null});
    case 'ADD_AUTHORS':
      return {...state, authors: payload};
    case 'FIND_AUTHORS':
      return {...state, foundedAuthors: payload ? state.authors.filter(
          author => ~author.name.indexOf(payload)
        ) : []};
    default:
      return {...state};
  }
}
