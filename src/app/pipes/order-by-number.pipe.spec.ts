import { OrderByNumberPipe } from './order-by-number.pipe';

describe('OrderByNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
