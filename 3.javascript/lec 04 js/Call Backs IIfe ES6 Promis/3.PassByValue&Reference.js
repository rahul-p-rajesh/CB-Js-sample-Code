/*Pass By Value 
if we pass by value a varaible in a function 
then the value of a variable is passed in such that 
any changes made to that function internally 
does not change the value of that variable outside the function instead a new copy 
of that variable is made inside the function
*/

/** Pass By Reference means
 * we pass in a pointer to that variable location in that function which means
 * so any changes made to that varaible get reflected outside the funtion as well
 */

 //Pass By Value example 
 //in js mostly pass by value happens
 var quidWinner = "Harry";


 function changeWinner(winner){
    console.log("prev value is "+ winner);// output harry
     winner = "Ron";
     console.log("new value inside fun value is "+ winner);// output Ron

 }

 changeWinner(quidWinner)
 console.log("value outside fun "+ quidWinner);// output harry
 
 //Pass By Reference example
    //as in js anything which is not primitive like (num bool or string)
    //a(array) reffered to x and x is provides to change(function)
    //which converts to pass by reference only
 var a = ['a','b','c'];

 function change(array){
     array[0] = 'x';
     array[1] = 'y';
     array[2] = 'z';
 }

 console.log(a);
 change(a)
 console.log(a)