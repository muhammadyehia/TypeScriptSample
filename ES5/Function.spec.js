/// <reference path="../typings/jasmine/jasmine.d.ts" />
describe('Function', function () {
    it('Arrow Function', function () {
        var books = GetAllBooks();
        var result = books.filter(function (element) { return element.id > 2; });
        expect(result).toEqual([
            { id: 3, title: 'book3', auther: 'auther3', avalable: true, category: Category.CThree },
            { id: 4, title: 'book4', auther: 'auther4', avalable: true, category: Category.CThree }]);
    });
    it('Function Types', function () {
        function CreateCustomerId(id, name) {
            return name + id;
        }
        var result = CreateCustomerId(10, 'yehia');
        expect(result).toEqual('yehia10');
    });
    it('Function Type declaration', function () {
        function CreateCustomerId(id, name) {
            return name + id;
        }
        var CustomerGeneratot;
        CustomerGeneratot = CreateCustomerId;
        var result = CustomerGeneratot(10, 'yehia');
        expect(result).toEqual('yehia10');
    });
    it('Function Type declaration using arrow function', function () {
        var CustomerGeneratot;
        CustomerGeneratot = function (id, name) { return id + name; };
        var result = CustomerGeneratot(10, 'yehia');
        expect(result).toEqual('10yehia');
    });
    it('Function Type optianal parameter ', function () {
        var CustomerGeneratot;
        CustomerGeneratot = function (id, name) {
            var result = '';
            if (name) {
                result = id + name;
            }
            else {
                result = id.toString();
            }
            return result;
        };
        var result = CustomerGeneratot(10);
        expect(result).toEqual('10');
    });
    it('Function Type default parameter ', function () {
        var CustomerGeneratot;
        CustomerGeneratot = function (id, name) {
            if (name === void 0) { name = "yehia"; }
            return name;
        };
        var result = CustomerGeneratot(10);
        expect(result).toEqual("yehia");
    });
    it('Function Type default parameter return from callback ', function () {
        var GetName;
        GetName = function () { return 'yehia'; };
        var CustomerGeneratot;
        CustomerGeneratot = function (id, name) {
            if (name === void 0) { name = GetName(); }
            return name;
        };
        var result = CustomerGeneratot(10);
        expect(result).toEqual("yehia");
    });
    it('Function Rest parameter', function () {
        var CustomerGeneratot;
        CustomerGeneratot = function (id) {
            var numbers = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                numbers[_i - 1] = arguments[_i];
            }
            return numbers;
        };
        var result = CustomerGeneratot(10, 10, 20, 30, 40);
        expect(result).toEqual([10, 20, 30, 40]);
    });
    it('Function overload ', function () {
        function test(id) {
            var result = '';
            if (typeof id === 'number') {
                result = "number";
            }
            else if (typeof id === 'boolean') {
                result = "boolean";
            }
            return result;
        }
        var result = test(1);
        expect(result).toEqual("number");
        result = test(true);
        expect(result).toEqual("boolean");
    });
});
//# sourceMappingURL=Function.spec.js.map