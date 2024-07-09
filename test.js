// test.js
// import { multiply } from '../multiply.js';
// import { assert } from 'chai';

// describe('multiply', () => {
//   it('should return 1 when multiplying 1 by 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });
// });

// import { multiply } from '../multiply.js';
// import { assert } from 'chai';
// describe('multiply', () => {
//   it('should return 1 when multiplying 1 by 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });
// });

// import { multiply } from '../multiply.js';
// import { assert } from 'chai';
// describe('multiply', () => {
//   it('should return 1 when multiplying 1 by 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });


//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(3, 3), 9);
//   });
// });

// import { multiply } from '../multiply.js';
// import { assert } from 'chai';
// describe('multiply', () => {
//   it('should return 1 when multiplying 1 by 1', () => {
//     assert.equal(multiply(1, 1), 1);
//   });

//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(2, 2), 4);
//   });
//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(3, 3), 9);
//   });

//   it('should return 4 when multiplying 2 by 2', () => {
//     assert.equal(multiply(4, 4), 16);
//   });
// });

import { multiply } from '../multiply.js';
import { assert } from 'chai';
describe('multiply', () => {
  it('should return 1 when multiplying 1 by 1', () => {
    assert.equal(multiply(1, 1), 1);
  });

  it('should return 4 when multiplying 2 by 2', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('should return 4 when multiplying 2 by 2', () => {
    assert.equal(multiply(3, 3), 9);
  });

  it('should return 4 when multiplying 2 by 2', () => {
    assert.equal(multiply(4, 4), 16);
  });

  it('should return 1035 when multiplying 23 and 45', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});

