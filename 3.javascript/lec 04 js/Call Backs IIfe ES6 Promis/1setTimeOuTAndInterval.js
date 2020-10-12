//set Timeout function
function sayHello(){
    console.log("Hello !")
}

/*
//set timeout --> run a function once 
//after a certain period of time
console.log("start from here")
setTimeout(sayHello,3000)
console.log("last line")
*/

/*
//set interval --> keeps on running a function again and again
// after a certain delay until it is cancelled
console.log("start from here")
setInterval(sayHello,1000)
console.log("last line")
*/

/*
//to cancel a set Interval
var intervalid;
var runCount = 0;

function sayHello2(){
    if(runCount >= 5 ){
        clearInterval(intervalid)
    }
    console.log("Hello 2 !");
    runCount += 1;
}

console.log("start from here")
var intervalid = setInterval(sayHello2,1000)
console.log("last line")
*/

/*
//to use async with set interval
setInterval(function(){
    console.log("this runs after every 1 sec")
},1000);
*/