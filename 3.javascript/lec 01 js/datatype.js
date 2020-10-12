//console.log is like print in the console
//typeof tells the data type it is
//use , or + to print multiple values 

//to resprent int
console.log(13313 , typeof 13313)

//to resprent float
console.log(13.233 , typeof 13.233)

//to resprent char
console.log('a' , typeof 'a')

//to resprent string
console.log("abc" , typeof "abc")

//to resprent boolean
console.log(true , typeof true)

//to resprent null
console.log(null , typeof null)

//to resprent undefined
console.log(undefined , typeof undefined)

//both int and float are considerd as a number
//both char and string are considerd as a string '' "" both are considerd string

// to define a function
function a(){
    return 1
}
// in js a fuction can be treated as a variable
//in js there is a data type called function
console.log(a(),typeof a())
//the above line is calling the value of function a
console.log(a,typeof a)
//the above line is calling the function itself a which is itself a data type

                                        //Strings
                                        let s1 = "he's a hero"
let s2 = 'he"s a hero'
let s3 = 'he\'s a hero'
let str = 'hi how\'s your day' 
let str2 = "hi how's your day"
// Use of backticks ``
    

let s4 = `he's a hero`
let s5 = `this multiple line can be 
only done in backtic`
//  template in string with backtick
let name = 'J'
let g6 = `Good Moning ${name}`
//in {} we can write any valid js
let g7 = `10 + 2 ${10 + 2}`
//method in string
console.log(str.length);

//searching in a string
let string = "this string is a long string very long string";
console.log("index of long", string.indexOf("long"));
console.log("index of have", string.indexOf("have"));
console.log("index of is after 3rd index", string.indexOf("is",3));
//last index of
console.log("index of string from last", string.lastIndexOf("string"));
console.log("index of string before second last index", string.lastIndexOf("string",6));

//slice
let s5 = "this is a long string";
let slice = s5.slice(5,7);
let slice2 = s5.slice(-6,-4);//slicing always goes from left to right -->
console.log(slice)
//substring
let substring = s5.substring(2,9);
console.log(substring)
//substr
let substr = s5.substr(2,3); // here first index is the start index second is the length till it goes from start index
console.log(substring)


                                        //Arrays
let arr = [1,23 , false ,'hello',[5,'ti'] ];
console.log(arr.length)
console.log(arr[0])

//add or remove element in an array
