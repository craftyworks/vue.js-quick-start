let name = 'workld'
console.log(`Hello ${name}`)

let msg = 'global'

function outer(e) {
    let msg = 'outer'
    console.log(msg)

    if (true) {
        let msg = 'block'
        console.log(msg)
    }
}

function foodReport(name, age, ...foods) {
    console.log(name + ', ' + age)
    console.log(foods)
}

foodReport('java', 20, 'apple', 'bob', 'milk')

function addContact({name, age, gender}) {
    console.log(name, age, gender)
}

function addContact2(name, age, gender) {
    const obj = {name, age, gender}
    console.log(obj)
}

let p = {name: 'java', age: 20, gender: 'M'}
addContact(p)
addContact2(p.name, p.age, p.gender)

let test1 = function (a, b) {
    return a + b
}
let test2 = (a, b) => {
    return a + b
}
let test3 = (a, b) => a + b

console.log(test1(1, 3), test2(1, 3), test3(1, 3))

let x = {
    fn: function () {
        console.log('hello')
    },
    fn2() {
        console.log('hello2')
    },
    fn3: () => {
        console.log('hello3')
    }
}

function Person(name, yearCount) {
    this.name = name
    this.age = 0
    let incrAge = () => {
        this.age++
    }
    for (let i = 1; i <= yearCount; i++) {
        incrAge(this)
    }
}

let p1 = new Person('java', 20)
console.log(`${p1.name} 의 나이 ${p1.age}`)
