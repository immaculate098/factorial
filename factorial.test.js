import { factorial } from '../factorial.js';
import { assert } from 'chai';

describe('factorial', () => {
  it('should return 1 for factorial of 0', () => {
    assert.equal(factorial(0), 1);
  });

  it('should return 1 for factorial of 1', () => {
    assert.equal(factorial(1), 1);
  });

  // it('should return 2 for factorial of 2', () => {
  //   assert.equal(factorial(2), 2);
  // });

  // it('should return 6 for factorial of 3', () => {
  //   assert.equal(factorial(3), 6);
  // });

  // it('should return 24 for factorial of 4', () => {
  //   assert.equal(factorial(4), 24);
  // });

  // it('should return 120 for factorial of 5', () => {
  //   assert.equal(factorial(5), 120);
  // });

  // it('should throw an error for negative numbers', () => {
  //   assert.throws(() => factorial(-1), Error, 'Negative numbers are not allowed.');
  // });
});
