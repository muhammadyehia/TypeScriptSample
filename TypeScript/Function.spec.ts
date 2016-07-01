
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('Function',()=>{

it('Arrow Function',
		() => {

			let books = GetAllBooks();
		let result=	books.filter(element => { return element.id > 2  });
		expect(result).toEqual([
			{ id: 3, title: 'book3', auther: 'auther3', avalable: true, category: Category.CThree },
			{ id: 4, title: 'book4', auther: 'auther4', avalable: true, category: Category.CThree }]);
		}
	);	

	it('Function Types',
		() => {

			function CreateCustomerId(id: number, name: string): string{
				return name + id;
			}
			let result = CreateCustomerId(10, 'yehia');
			expect(result).toEqual('yehia10');

		
		}
	);
	it('Function Type declaration',
		() => {

			function CreateCustomerId(id: number, name: string): string {
				return name + id;
			}
			let CustomerGeneratot: (id: number, name: string) => string;
			CustomerGeneratot = CreateCustomerId;
			let result = CustomerGeneratot(10, 'yehia');
			expect(result).toEqual('yehia10');
		}
	);
	it('Function Type declaration using arrow function',
		() => {

			let CustomerGeneratot: (id: number, name: string) => string;
			CustomerGeneratot = (id: number, name: string) => { return id + name };
			let result = CustomerGeneratot(10, 'yehia');
			expect(result).toEqual('10yehia');
		}
	);

	it('Function Type optianal parameter ',
		() => {

			let CustomerGeneratot: (id: number, name?: string) => string;
			CustomerGeneratot = (id: number, name?: string) => { 
				let result :string = '';
				if (name)
				{
					result = id +name;
				}
				else
				{
					result = id.toString();
				}
				return result;
			};
			let result = CustomerGeneratot(10);
			expect(result).toEqual('10');
		}
	);
	it('Function Type default parameter ',
		() => {

			let CustomerGeneratot: (id: number, name?: string) => string;
			CustomerGeneratot = (id: number, name: string = "yehia") => { return name;};
			let result = CustomerGeneratot(10);
			expect(result).toEqual("yehia");
		}
	);
	it('Function Type default parameter return from callback ',
		() => {
               let GetName:()=>string
               GetName = () => { return 'yehia' };
			let CustomerGeneratot: (id: number, name?: string) => string;
			CustomerGeneratot = (id: number, name: string = GetName()) => { return name; };
			let result = CustomerGeneratot(10);
			expect(result).toEqual("yehia");
		}
	);
	it('Function Rest parameter',
		() => {
			
			
			let CustomerGeneratot: (id: number, ...numbers: number[]) => number[];
			CustomerGeneratot = (id: number, ...numbers: number[]) => { return numbers; };
			let result = CustomerGeneratot(10, 10, 20, 30, 40);
			expect(result).toEqual([10,20,30,40]);
		}
	);
	it('Function overload ',
		() => {


			function test (id: number): string;
			function test(id: boolean): string;
			function test(id: any): string
			{
				let result = '';
				if (typeof id === 'number')
				{
					result = "number";
				}
				else if (typeof id === 'boolean')
				{
					result = "boolean";
				}
				return result;
			}
			let result = test(1);
			expect(result).toEqual("number");
			result = test(true);
			expect(result).toEqual("boolean");
		}
	);
});

