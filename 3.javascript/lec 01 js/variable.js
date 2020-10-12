//defing varaibles

c = 20; //global variable
var d = 30; // function Scope it is valid anywhere in a function
let e = 50; //block Scope  it vaild within a block
const z = 10;////block Scope  it vaild within a block

//block scope means they are available only inside the loop or if or while statement

//eg
let b = [1,2,3,4,5];
function f (){
    let a = 5;
    if(a==5){//this if is a block
        let b = 10//this  b is available  only inside of if block
        console.log("Inside block or if statement value of b is ",b);
    }
    console.log("outside of block or if statement value of b is ",b)
}
f()
//error will be created in line 27 where h is called outside the loop
function g1 (){
    let a = 5;
    if(a==5){
        let h = 10//this if is a block
        console.log("Inside block or if statement value of h is ",h);
    }
    console.log("outside of block or if statement value of h is ",h) //this line will create error
}
//to correct the error make h a var which makes it available in the complete function
function g2 (){
    let a = 5;
    if(a==5){
        var h = 10//this if is a block
        console.log("Inside block or if statement value of h is ",h);
    }
    console.log("outside of block or if statement value of h is ",h) 
}
//to make h availble outside the function make h = 10
function g3 (){
    let a = 5;
    if(a==5){//this if is a block
         h = 10 //this makes h globally availble aka outside the function
        console.log("Inside block or if statement value of h is ",h);
    }
    console.log("outside of block or if statement value of h is ",h) 
}
g3()
console.log("global value of h  ",h)