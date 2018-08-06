export interface Course {
  id?: number;
  name: string;
  date: number;
  duration?: number;
  description: string;
  isTopRated: boolean;
  authors?: string[];
}

export class CourseClass implements Course {
  constructor(
    public id: number,
    public name: string,
    public date: number,
    public duration: number,
    public description: string,
    public isTopRated: boolean,
    public authors?: string[]
  ) {  }
}
