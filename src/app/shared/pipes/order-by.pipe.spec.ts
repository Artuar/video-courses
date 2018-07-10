import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('check convert', () => {
    expect(pipe.transform([{a: 1}, {a: 2}], 'a')).toEqual([{a: 2}, {a: 1}]);
  });
});
