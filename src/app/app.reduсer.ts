export function appReduсer(state = {courses: []}, {type, payload}) {
  switch (type) {
    case 'COURSES_LIST':
      return {...state, courses: payload.courses, thereAreMore: payload.thereAreMore};
    case 'ADD_COURSES':
      return {...state, courses: [...state.courses, ...payload.courses], thereAreMore: payload.thereAreMore};
    case 'DELETE_COURSE':
      return {...state, courses: state.courses.filter(course => course.id !== payload)};
    case 'SAVE_COURSE':
      return {...state, courses: state.courses.push(payload)};
    case 'EDIT_COURSE':
      return {...state, courses: state.courses.map(course => course.id === payload.id ? payload : course)};
    case 'ADD_USER':
      return {...state, user: payload};
    case 'REMOVE_USER':
      return Object.assign({}, state, {user: null});
    default:
      return state;
  }
}
