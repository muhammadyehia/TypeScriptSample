
/// <reference path="../typings/jasmine/jasmine.d.ts" />

import  {Book,DamageLogger, Employee,Iservice} from './Interfaces'

function GetAllTypedBooks(): Book[]{
	let books:Book[] = [
	    {id:  1, title: 'book1', author: 'auther1', available: true },
		{ id: 3, title: 'book3', author: 'auther3', available: true },
		{ id: 2, title: 'book2', author: 'auther2', available: false},
		{ id: 4, title: 'book4', author: 'auther4', available: true }
		];
	return books;
}

function GetAuthorOfBook(book:Book):string
{
	let books:Book[]=GetAllTypedBooks();
	let result:Book =books.filter(element => { return element.id ===book.id})[0];
	return result.author;
}
describe('Interface',()=>{
    it('interface as a type',
		() => {

		let books:Book[] = GetAllTypedBooks();
		expect(books).toEqual([
	    { id: 1, title: 'book1', author: 'auther1', available: true },
		{ id: 3, title: 'book3', author: 'auther3', available: true },
		{ id: 2, title: 'book2', author: 'auther2', available: false},
		{ id: 4, title: 'book4', author: 'auther4', available: true }
		]);
        let book:Book={ id: 1, title: 'book1', author: 'auther1', available: true , pages:10,markDamaged:(reason:string)=> reason};
		let author:string= GetAuthorOfBook(book);
		expect(book.author).toEqual(author);
		expect(book.markDamaged("dam")).toEqual("dam");
		}
	);	
	    it('interface for function types',
		() => {

	    let logDamage:DamageLogger=(reason:string)=>reason+" hey";
		expect(logDamage("yehia")).toEqual("yehia hey");

		}

	);

	        it('interface Extend ',
		() => {
	  let e:Employee={ name:"muhammad", email:"muhammad@gmail",address:"giza"};
      expect(e.name).toEqual("muhammad"); 
		}
		
	);


	 it('interface With Class ',
		() => {
	
class service implements Iservice
{
	DoWork( item :string):string
	{
		return item+"DoWork";
	}
}
let c:Iservice=new service();
 expect(c.DoWork("muhammad")).toEqual("muhammadDoWork");  

		}
		
	);

});

