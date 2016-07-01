/// <reference path="../typings/jasmine/jasmine.d.ts" />
"use strict";
function GetAllTypedBooks() {
    var books = [
        { id: 1, title: 'book1', author: 'auther1', available: true },
        { id: 3, title: 'book3', author: 'auther3', available: true },
        { id: 2, title: 'book2', author: 'auther2', available: false },
        { id: 4, title: 'book4', author: 'auther4', available: true }
    ];
    return books;
}
function GetAuthorOfBook(book) {
    var books = GetAllTypedBooks();
    var result = books.filter(function (element) { return element.id === book.id; })[0];
    return result.author;
}
describe('Interface', function () {
    it('interface as a type', function () {
        var books = GetAllTypedBooks();
        expect(books).toEqual([
            { id: 1, title: 'book1', author: 'auther1', available: true },
            { id: 3, title: 'book3', author: 'auther3', available: true },
            { id: 2, title: 'book2', author: 'auther2', available: false },
            { id: 4, title: 'book4', author: 'auther4', available: true }
        ]);
        var book = { id: 1, title: 'book1', author: 'auther1', available: true, pages: 10, markDamaged: function (reason) { return reason; } };
        var author = GetAuthorOfBook(book);
        expect(book.author).toEqual(author);
        expect(book.markDamaged("dam")).toEqual("dam");
    });
    it('interface for function types', function () {
        var logDamage = function (reason) { return reason + " hey"; };
        expect(logDamage("yehia")).toEqual("yehia hey");
    });
    it('interface Extend ', function () {
        var e = { name: "muhammad", email: "muhammad@gmail", address: "giza" };
        expect(e.name).toEqual("muhammad");
    });
    it('interface With Class ', function () {
        var service = (function () {
            function service() {
            }
            service.prototype.DoWork = function (item) {
                return item + "DoWork";
            };
            return service;
        }());
        var c = new service();
        expect(c.DoWork("muhammad")).toEqual("muhammadDoWork");
    });
});
//# sourceMappingURL=Interface.spec.js.map