let s1 = new Set()
s1.add('a')
s1.add('a')
s1.add('b')
s1.add(3)

console.log(s1)

let s2 = new Set(['a', 'b', 'c'])
let s3 = new Set([1, 2, 3, 'a', 'b'])
let s4 = new Set([...s2.values(), ...s3.values()])
console.log(s4)

let s5 = new Set([...s2.values()].filter(e => s3.has(e)))
console.log(s5)

let s6 = new Set([...s2.values()].filter(e => !s3.has(e)))
console.log(s6)

let teams = new Map()

teams.set('lg', '트윈스')
teams.set('nc', '다이노스')
teams.set('ob', '맥줘')

console.log(teams)

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        if (Person.count) {
            Person.count++
        } else {
            Person.count = 1
        }
    }

    static getPersonCount() {
        return Person.count
    }

    toString() {
        return `name = ${this.name}, age = ${this.age}`
    }
}

let p1 = new Person('james',  10)
let p2 = new Person('homes', 20)

console.log(p1, p1.toString(), Person.getPersonCount(), Person.count)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary
    }
    toString() {
        return super.toString() + `, salaray = ${this.salary}`
    }
}

console.log(new Employee('james', 20, 3000000).toString())

