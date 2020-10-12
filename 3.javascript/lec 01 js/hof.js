//higher order function
//if a programing langauge allows to return or pass a function from another function then it is called higher order function

function createGreet1(greeting){

    function greet(name){
        console.log(greeting, name)
    }

    return greet
}
//only diff between above and below is of return greet && greet('X')
// one is retuning the function other will return the value inside the function
function createGreet2(greeting){

    function greet(name){
        console.log(greeting, name)
    }

    return greet('value of function is called')
}

let g1 = createGreet1 ('Good Morning') // createGreet1 will return function greet which is a variable
//console.log(typeof g1)


// let g2 = createGreet2 ('Good Morning') g2 will be undefined here
createGreet2 ('Good Morning')
 // createGreet2 will output the value inside the function greet which is console.log that is undefined
//console.log(typeof g2)

//use of higher order function

let g3 = createGreet1(' Good Morning ')
g3('R')

let g4 = createGreet1('Good Evening')
g4('R')


//using function
function getName(){
    return document.getElementById('namebox').value
}
function createGreet3(greeting){

    function greet(name){
        // as name was a function check index.html
        console.log(greeting, name())
    }

    return greet
}
let g5 = createGreet3('Good Morning')
let g6 = createGreet1('Good Evening')
