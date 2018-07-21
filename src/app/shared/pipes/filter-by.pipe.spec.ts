import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;
  beforeEach(() => {
    pipe = new FilterByPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('check filter', () => {
    expect(pipe.transform([{a: '12'}, {a: '22'}], 'a', '1'))
      .toEqual([{a: '12'}]);
  });
});
