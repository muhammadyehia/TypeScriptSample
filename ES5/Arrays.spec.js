/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe('Array Declarations', function () {
    it('Array usage', function () {
        var one = ['one', 'two', 'three'];
        var two = [1, 2, 3];
        expect(one[1]).toEqual('two');
        expect(two[2]).toEqual(3);
        expect(one).toEqual(['one', 'two', 'three']);
        expect(two).toEqual([1, 2, 3]);
    });
});
//# sourceMappingURL=Arrays.spec.js.map