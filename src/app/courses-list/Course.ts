export class Course {
    constructor(
        public id: number,
        public title: string,
        public creation_date: number,
        public duration: number,
        public description: string,
        public top_rated: boolean
    ) {}
}
