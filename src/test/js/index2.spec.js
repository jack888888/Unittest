var isNum2 = require('../../../src/main/js/index2.js');

// import {isNum} from '../../../src/main/js/index2';
// import isNum from '../../../src/main/js/index2.js';

describe('index2.js:', () => {
    it('isNum2() should work fine.', () => {
    expect(isNum2(1)).toBe(true);
    expect(isNum2('1')).toBe(false);
});
});