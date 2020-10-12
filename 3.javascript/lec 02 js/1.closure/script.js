/*a closure gives you access to 
an outer function’s scope (meaning variable) from an inner function.
https://www.youtube.com/watch?time_continue=296&v=kPPy-VwuLxc&feature=emb_title
 In JavaScript, closures are created every time a function is created, 
 at function creation time.*/

 /*
 function outerfunction() {
    var outerVariable = 'Mozilla'; // name is a local variable created by outerfunction
    function innerFunction() { // innerFunction() is the inner function, a closure
      alert(outerVariable); // use variable declared in the parent function
    }
    innerFunction;
  }

let y = outerfunction();
*/
//2nd example
function outer(args1){
    let outervar = 10;

    function inner(args2){
        let innervar = 20;
        console.log(args1,outervar,args2,innervar)
        //if you call for arguments at this point then it will only read the arguments of inner function
        //it will not capture the arguments of outer function
        
        console.log(arguments[0])//it will output args2
    }
    return inner
}

//let x = outer('param1')
//x('param2')

/* all the scope that were availble during the birth of inner function
are captured by that function and available inside the inner function
till the inner function exist*/
//it is infinitely nestable
 
  
function outer1(argsOuter){
  let o =1;
  function miidle(argsMiddle){
    let o = 2;
    function inner(argsInner){
      let o = 3;
      console.log(argsOuter,argsMiddle,argsInner,o)
      //if you call for arguments at this point then it will only read the arguments of inner function
      //it will not capture the arguments of outer function
      
      console.log('argument called here ',arguments[1])//it will output args2
  }
  return inner;
  }
  return miidle
}
let a = outer1("outer")
let b = a("mid");
let c = b("inner")
