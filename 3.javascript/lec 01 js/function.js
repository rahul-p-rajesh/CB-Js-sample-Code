//properties of function
function a(){
    return "A"
}

function b(){
    return 1
}
// calling a function before it is defined works in js
    // why?? --> when js file are excecuted it happens in 2 pass way
        //1 pass --> interpreter will goes once stores all function defination/initializtion
        //2nd pass --> then it will excecute the lines
    // javascript hoisting(look into GOOGlE) it will take all the function defination and put it on
    // the top/queue then the excecution gets done

console.log(c())
function c(){
    return "C"
}
//diff way of declaring a function
let d = function(){
    return "D"
}
console.log(d())
    //if a function or variable is defined with let
    // then it cannot be used before declaration they are not hoisted

        //console.log(d())              this will create a error
        //let d = function(){
        //return "D"}


//polymorphism
//in other language for a method overiding function has to be newly defined again more that once
//but in js that is not needed 
//for eg fun --> area for circle and rectangle is
function area(height,width){
    if(!width){   // 0 null and undefined act as false
        return Math.PI * height*height
    }
    return height*width
}
console.log("area rect ",area(3,4))
console.log("area circle ",area(4))

//to call variable  defined in the function
hello(1,2,3)


function hello(){
    console.log('hello world ',arguments)
}    
//argument is an array consisting of all the parameter passed in it

