'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var s1 = new Set();
s1.add('a');
s1.add('a');
s1.add('b');
s1.add(3);

console.log(s1);

var s2 = new Set(['a', 'b', 'c']);
var s3 = new Set([1, 2, 3, 'a', 'b']);
var s4 = new Set([].concat(_toConsumableArray(s2.values()), _toConsumableArray(s3.values())));
console.log(s4);

var s5 = new Set([].concat(_toConsumableArray(s2.values())).filter(function (e) {
    return s3.has(e);
}));
console.log(s5);

var s6 = new Set([].concat(_toConsumableArray(s2.values())).filter(function (e) {
    return !s3.has(e);
}));
console.log(s6);

var teams = new Map();

teams.set('lg', '트윈스');
teams.set('nc', '다이노스');
teams.set('ob', '맥줘');

console.log(teams);

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        if (Person.count) {
            Person.count++;
        } else {
            Person.count = 1;
        }
    }

    _createClass(Person, [{
        key: 'toString',
        value: function toString() {
            return 'name = ' + this.name + ', age = ' + this.age;
        }
    }], [{
        key: 'getPersonCount',
        value: function getPersonCount() {
            return Person.count;
        }
    }]);

    return Person;
}();

var p1 = new Person('james', 10);
var p2 = new Person('homes', 20);

console.log(p1, p1.toString(), Person.getPersonCount(), Person.count);

var Employee = function (_Person) {
    _inherits(Employee, _Person);

    function Employee(name, age, salary) {
        _classCallCheck(this, Employee);

        var _this = _possibleConstructorReturn(this, (Employee.__proto__ || Object.getPrototypeOf(Employee)).call(this, name, age));

        _this.salary = salary;
        return _this;
    }

    _createClass(Employee, [{
        key: 'toString',
        value: function toString() {
            return _get(Employee.prototype.__proto__ || Object.getPrototypeOf(Employee.prototype), 'toString', this).call(this) + (', salaray = ' + this.salary);
        }
    }]);

    return Employee;
}(Person);

console.log(new Employee('james', 20, 3000000).toString());