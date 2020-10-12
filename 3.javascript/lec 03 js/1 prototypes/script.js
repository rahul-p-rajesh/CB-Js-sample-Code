//primitive data types
//if we do for any say str.__proto__.__proto__.__proto__ till we reach null
//then we can find the level of inheritance for each data type
let str = "ASsdada"; // 3 level inheritance from null
let num = 233; // 3 level inheritance from null
let bool = true; // 3 level inheritance from null
let arr = [246, 436, 6, 346]; // 3 level inheritance from null
let obj = { a: 10, b: "acded" }; // 2 level inheritace from null
let fun = function () {
  console.log("hi");
}; //  3 level inheritance from null

//if x and y are non primitive(num string boolean or array) then
// == is used  checks the reference
// and x == y : true then it means both x and y are reffering to same  objecte

/*
console.log(typeof String);
String is a function that creates string
String()-->""
String(2)--> "2"
String(true)-->"true"
same way is Boolean, Number, Array, Object and  Function
*/

// these String Boolean Number Array Object Function all are global function present in window
//in browser all global function are present in the window
console.log("======= types =======");
console.log("type of String", typeof String);
console.log("type of Boolean", typeof Boolean);
console.log("type of Number", typeof Number);
console.log("type of Array", typeof Array);
console.log("type of Object", typeof Object);
console.log("type of Function", typeof Function);
//there work is to convert any data type given as a input  into there name data type
// eg Boolean(0)--> false ; Boolean(1)--> true ;
//   Boolean("")--> false ;Boolean("ab")--> true      etc
// Number(false) --> 0 Number(true) --> 1

/*.__proto__ and prototype are 2 diff thing
.__proto__ --> it is a hidden varaible/pointer which points to that object from which the current object has been inherited or created
.prototype --> eg Object.prototype they are predefined things which exist in java script from which things are created or inherited
so a if you create a string then it is created from String.prototype*/
//prototype are like blueprint which creates object or function
console.log("======= proto chain =======");
console.log(str.__proto__.__proto__ == obj.__proto__);
console.log(num.__proto__.__proto__ == obj.__proto__);
console.log(bool.__proto__.__proto__ == obj.__proto__);
console.log(arr.__proto__.__proto__ == obj.__proto__);
console.log(fun.__proto__.__proto__ == obj.__proto__);

// Everything in js indirectly inherits from the same thing( which is a Object )
// even obj is inherited from  Object
// i.e. in Javascript, everything is essentially an Object

console.log("======= prototypes ======= ");
console.log(obj.__proto__ == Object.prototype); //True this mean obj is inherited from Object
console.log(str.__proto__ == String.prototype); //same for all
console.log(num.__proto__ == Number.prototype);
console.log(bool.__proto__ == Boolean.prototype);
console.log(arr.__proto__ == Array.prototype);
console.log(fun.__proto__ == Function.prototype);

// String.prototype inherits from Object.prototype
//String.prototype.__proto__ == Object.prototype  --> true
//to take functions .__prototype we go for function.protype.__protype__
//even all function are inherited from object itself

let x = Object.create(Boolean.prototype);
// typeof (Object.create(Boolean.prototype)  or x is -> object
//type of bool = true --> is  boolean
// x._proto__ == bool._proto__ --> true which is that they are inherited from same object type Boolean
//so this means if two object are inherited from same object that doesn't means they are of same type

str = "adada";
console.log(str.__proto__.charAt); // it will return String.prototype
// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc
//you can alter the function like charAt by going into String.prototype.charAt = function {return 'x}
//you can change in default class/object which is not possible in other languages

str.charAt = function () {
  return "X";
}; // this will not change above one will change

//to find how many times an array get joined
// join Convert the elements of an array into a string:
Array.prototype.joinOriginalOutput = Array.prototype.join;
Array.prototype.join = function () {
  console.log("join called on", this);
  return this.joinOriginal(...arguments);
};
//eg
let l = [123, 235, 24, 346];
a = l.join(",");
console.log(a);
/**
 * Array.prototype has many function
 * out of which we save join functionality in joinOriginal
 * and then we change the join function itself
 * {
 *  ....
 *  joinOriginal: function () {},
 *  join: function () { our fun },
 *  ....
 * }
 */
