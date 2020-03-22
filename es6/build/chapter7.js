'use strict';

var name = 'workld';
console.log('Hello ' + name);

var msg = 'global';

function outer(e) {
    var msg = 'outer';
    console.log(msg);

    if (true) {
        var _msg = 'block';
        console.log(_msg);
    }
}

function foodReport(name, age) {
    console.log(name + ', ' + age);

    for (var _len = arguments.length, foods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        foods[_key - 2] = arguments[_key];
    }

    console.log(foods);
}

foodReport('java', 20, 'apple', 'bob', 'milk');

function addContact(_ref) {
    var name = _ref.name,
        age = _ref.age,
        gender = _ref.gender;

    console.log(name, age, gender);
}

function addContact2(name, age, gender) {
    var obj = { name: name, age: age, gender: gender };
    console.log(obj);
}

var p = { name: 'java', age: 20, gender: 'M' };
addContact(p);
addContact2(p.name, p.age, p.gender);

var test1 = function test1(a, b) {
    return a + b;
};
var test2 = function test2(a, b) {
    return a + b;
};
var test3 = function test3(a, b) {
    return a + b;
};

console.log(test1(1, 3), test2(1, 3), test3(1, 3));

var x = {
    fn: function fn() {
        console.log('hello');
    },
    fn2: function fn2() {
        console.log('hello2');
    },

    fn3: function fn3() {
        console.log('hello3');
    }
};

function Person(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        _this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        incrAge(this);
    }
}

var p1 = new Person('java', 20);
console.log(p1.name + ' \uC758 \uB098\uC774 ' + p1.age);