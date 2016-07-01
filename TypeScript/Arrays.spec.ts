/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('Array Declarations', () => {

	it('Array usage',
		() => {

			let one: string[] = ['one', 'two', 'three'];
			let two: Array<number> = [1, 2, 3];
			expect(one[1]).toEqual('two');
			expect(two[2]).toEqual(3);
			expect(one).toEqual(['one', 'two', 'three']);
			expect(two).toEqual([1, 2, 3]);
		}
	);

});