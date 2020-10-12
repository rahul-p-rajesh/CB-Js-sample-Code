/**
 * when we pass by value a new copy that value is made and any changes made to that within the function will not affect the origninal variable outside the function
 * 
 * passing by refference means we actually pass a pointer to that variable in the function and any change made to that inside the function will affect outside as the function as well
 * 
 */

//js is pass by value for
//eg
var a = "zzzz";

function changeA(b){
    b = "yyyy";
}

console.log(a);
changeA(a);
console.log(a);

//for non primitive data type  the refference is passed as a value
//which means any change made inside the function will reflect outside as well

//eg
var array = ['a','b','c'];

function changeArray(arr){
    arr[0] = 'x';
    arr[1] = 'y';
    arr[2] = 'z';

}
console.log("old walue of array",array);
changeArray(array);
console.log("new value of array ",array);

