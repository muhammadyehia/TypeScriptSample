/// <reference path="../typings/jasmine/jasmine.d.ts" />
enum Category { COne = 2, CTwo = 5, CThree = 4 };
function GetAllBooks() {
	let books = [{id:1, title: 'book1', auther: 'auther1', avalable: true, category: Category.COne },
		{ id: 2, title: 'book2', auther: 'auther2', avalable: false, category: Category.CTwo },
		{ id: 3, title: 'book3', auther: 'auther3', avalable: true, category: Category.CThree },
		{ id: 4, title: 'book4', auther: 'auther4', avalable: true, category: Category.CThree }];
	return books;
}
describe('Enum Declarations', () => {

	it('Enum usage',
		() => {
			let cOne: Category = Category.COne;
			let cTwo: Category = Category.CTwo;
			expect(cOne).toEqual(Category.COne);
			expect(cOne).toEqual(2);
			expect(cTwo).toEqual(5);
		}
	);

});

describe('Filter Use Enum', () => {

	it('Filter',
		() => {
			let GetTitleByCategoty=	function (filterCategory: Category): Array<string>
		 {
				const allBooks = GetAllBooks();
				const filterdTitles: string[] = [];
				for (let item of allBooks)
				{
					// TODO  use Object.is
					if (item.category=== filterCategory)
					{
						filterdTitles.push(item.title);
					}
				}
				return filterdTitles;

		 } 
			let Titles:string[] = GetTitleByCategoty(Category.CThree);
			expect(Titles).toEqual(['book3', 'book4']);
		}
	);

});