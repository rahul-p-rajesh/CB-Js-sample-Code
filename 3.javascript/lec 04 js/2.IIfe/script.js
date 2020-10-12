//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
/* syntax
( function () {
    statements
} )    ();

`The first () is the anonymous function with lexical scope enclosed
         within the Grouping Operator (). 
         This prevents accessing variables within the IIFE idiom as well as 
         polluting the global scope.
The second () creates the immediately invoked function expression () 
        through which the JavaScript engine will directly interpret the function.
*/
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE

//eg 1
( ()=>{ 
    console.log('Say Hello');
} )();
//eg 2
( ()=>{ 
    var a = 10;
    var b = 5
    console.log(a+b);
} )();
//console.log(a,b); this line outside iife will created error as a and b is not available outside iife

//minification via iife
//for eg 
function DoMath(){
    console.log("3^4 "+Math.pow(3,4))
    console.log("4^3 "+Math.pow(4,3))
    console.log("root(2) "+Math.sqrt(2))
    console.log("sin(10) "+Math.sin(10))
}
//when turned  into IIFE minification happens
(function DoMath2(l,p,r,s){
    l("3^4 "+p(3,4))
    l("4^3 "+p(4,3))
    l("root(2) "+r(2))
    l("sin(10) "+s(10))
})(console.log,Math.pow,Math.sqrt,Math.sin);


//other way of using iIfe is with for loop and set timeout
for(var i = 0;i<10;i++){
    
    setTimeout(function(){
        console.log(i)
    },100)//it will output only 10 as for loop from 1 to 10 will be excecuted before 100 milli second
}
//to solve this issue
for(var i = 0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },100)
    })(i)
}
//other easier way is 
for(let i = 0;i<10;i++){//as let bound the value of i with the block so every iteration has to be excecuted
    setTimeout(function(){
        console.log(i)
    },100)}