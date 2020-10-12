arr1 = ["One","Two","Three"];

//for loop 
for(let i = 0;i< arr1.length;i++){
    console.log(arr1[i])
}

//for each loop
console.log("for each")
arr1.forEach(element => console.log(element));

console.log("diff way of for each")
arr1.forEach(function(value,idx) {
     console.log(idx," --> ",value)});

//for of loop
for(let val of arr1){
    console.log(val)
}

//for in loop
for(let index in arr1){ // returns index
    console.log(val)
}