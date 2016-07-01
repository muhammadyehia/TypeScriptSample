/// <reference path="../typings/jasmine/jasmine.d.ts" />
var Category;
(function (Category) {
    Category[Category["COne"] = 2] = "COne";
    Category[Category["CTwo"] = 5] = "CTwo";
    Category[Category["CThree"] = 4] = "CThree";
})(Category || (Category = {}));
;
function GetAllBooks() {
    var books = [{ id: 1, title: 'book1', auther: 'auther1', avalable: true, category: Category.COne },
        { id: 2, title: 'book2', auther: 'auther2', avalable: false, category: Category.CTwo },
        { id: 3, title: 'book3', auther: 'auther3', avalable: true, category: Category.CThree },
        { id: 4, title: 'book4', auther: 'auther4', avalable: true, category: Category.CThree }];
    return books;
}
describe('Enum Declarations', function () {
    it('Enum usage', function () {
        var cOne = Category.COne;
        var cTwo = Category.CTwo;
        expect(cOne).toEqual(Category.COne);
        expect(cOne).toEqual(2);
        expect(cTwo).toEqual(5);
    });
});
describe('Filter Use Enum', function () {
    it('Filter', function () {
        var GetTitleByCategoty = function (filterCategory) {
            var allBooks = GetAllBooks();
            var filterdTitles = [];
            for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
                var item = allBooks_1[_i];
                // TODO  use Object.is
                if (item.category === filterCategory) {
                    filterdTitles.push(item.title);
                }
            }
            return filterdTitles;
        };
        var Titles = GetTitleByCategoty(Category.CThree);
        expect(Titles).toEqual(['book3', 'book4']);
    });
});
//# sourceMappingURL=Enum.spec.js.map