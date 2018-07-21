export interface Course {
  id?: number;
  title: string;
  creation_date: number;
  duration: number;
  description: string;
  top_rated: boolean;
  edit?: boolean;
  new_course?: boolean;
  authors?: string[];
}

export class CourseClass implements Course {
  constructor(
    public id: number,
    public title: string,
    public creation_date: number,
    public duration: number,
    public description: string,
    public top_rated: boolean,
    public authors?: string[]
  ) {  }
}
