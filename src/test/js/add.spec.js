var add = require('../../../src/main/js/add.js');

describe('hello',function(){
    it('test add',function(){
        var a = add(3,6);
        expect(a).toEqual(9);
    });
});


// sinon.stub(g_getter, 'getBlId').callsFake(function () {
//     return '1000000003142116545';
// });