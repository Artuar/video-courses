import { DurationFormatPipe } from './duration-format.pipe';

describe('DurationFormatPipe', () => {
  let pipe: DurationFormatPipe;
  beforeEach(() => {
    pipe = new DurationFormatPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('check convert of duration', () => {
    expect(pipe.transform(65)).toEqual('1h 5min');
  });
});
