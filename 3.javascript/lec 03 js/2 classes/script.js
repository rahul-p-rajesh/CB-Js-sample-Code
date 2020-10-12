/**
 * Classes are a template for creating objects.
 * They encapsulate data with code to work on that data.
 * Classes in JS are built on prototypes
 * but also have some syntax and semantics that are not shared with ES5 classalike semantics.
 */
// due to syntatical sugar it is looking one class in inheriting from other
//but actually mai object.protytype se inherit karte ja rahe hai

class Person {
  constructor(name, age) {
    //no need of defining variable name and age
    this.name = name;
    this.age = age;
  }

  isAdult() {
    //defining a function
    return this.age >= 18;
  }
}

let p1 = new Person("John Doe", 22);
let p2 = new Person("Jane Doe", 15);
console.log("p1.isAdult() ", p1.isAdult());
console.log("p2.isAdult() ", p2.isAdult());

console.log(typeof Person); //this will output function --> there is NO new datatype called 'class'
console.log(p1.__proto__ == Person.prototype); // true
console.log(p1.__proto__.__proto__ == Object.prototype); // true
console.log(Person.prototype.__proto__ == Object.prototype); //true

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

//there is no class to class inheritance in js
let s1 = new Student("Harry Potter", 13, 5);
let s2 = new Student("Hermoine Granger", 14, 6);

console.log(s1.__proto__ == Student.prototype);
console.log(s1.__proto__.__proto__ == Person.prototype);
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype);

// so inheritance chain is there
//Object.prototype se inherit hua Person.prototype & Person.prototype se inherit hua Student.prototype

// Object.prototype -> Person.prototype -> Student.prototype

// there is no inheritance between the classes (actually they are functions)
//there is no relation between student and person or object with each other only relationship is between there prototype
// Object -x-> Person -x-> Student

//as classes in js is just syntctical sugar
//before 2015 the classes in a way exist liked this
function Person(name, age) {
  //capital mai likhe hue function class ki tarah use karne hai
  this.name = name;
  this.age = age;
}

function Student() {}

let p1 = new Person("John Doe", 22);
