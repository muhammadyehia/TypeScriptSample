/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe('varible declarations', function () {
    it('var vs  Let', function () {
        if (true) {
            var x = "x varible";
            var y = "y varible";
        }
        expect(x).toEqual("x varible");
        //expect(y).toBeUndefined();
    });
    it('const usage it canot change the hole object but you can change content of it ', function () {
        var books = ['book1', 'book2', 'book3'];
        var bookLength = books.length;
        expect(bookLength).toEqual(3);
        books.push('book4');
        bookLength = books.length;
        expect(bookLength).toEqual(4);
        books.pop();
        books.pop();
        bookLength = books.length;
        expect(bookLength).toEqual(2);
    });
});
//# sourceMappingURL=DeclarVariable.spec.js.map