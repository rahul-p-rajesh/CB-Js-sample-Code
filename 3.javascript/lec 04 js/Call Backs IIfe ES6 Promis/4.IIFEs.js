//IIFE immediately invoked function expression

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
//that runs as soon as it is defined


/* outline is
        (function () {
            statements
        })();

    It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

            The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
        This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

            The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/
(function(){
    console.log("IIFE")
})();       //output IIFE
//benefit is it creates a local scope without polluting the global scope

(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"

var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"

//minification
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