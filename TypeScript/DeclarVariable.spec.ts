
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('varible declarations',()=>{

it('var vs  Let',
		() => {

			if (true) {
				var x = "x varible";
				let y = "y varible";
			}
			expect(x).toEqual("x varible");
			//expect(y).toBeUndefined();
		}
	);	

	it('const usage it canot change the hole object but you can change content of it ',
		() => {
			const books = ['book1', 'book2', 'book3'];
			let bookLength: number = books.length;
			expect(bookLength).toEqual(3);
			books.push('book4');
			 bookLength = books.length;
			 expect(bookLength).toEqual(4);
			books.pop();
			books.pop();
			bookLength = books.length;
			expect(bookLength).toEqual(2);

			
		}
	);
});

