/**
 * Lambda ƛ Functions
 *
 * Pure functions or lambda functions are those that are :
 * 1. stateless (output or return does not depend on any other variable defined outside the function || only depends on the input given) 
 * 2. output depends only on the input and nothing else
 * 3. for the same input, output will always be the same
 *
 *
 * y = f(x) = 2x + 3
 *
 */

let a = 10
// function f1(x) { // it is a lambda function
//   return 2 * x + 3
// }

let f1 = (x) => (2 * x + 3)

// f1(10) -> 23
// it will be always 23, whatever the case

let count = 0
function f2(delta) {// not a lambda function as count is a varaible defined outside f2
  count += delta
  return count
}


let f3 = (x) => {
    // do other things
    return x + count // this is not illegal and works but ideally arrow function are not for this purpose
}

//further reading
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions