//this in js is diff from what is in java 

//creating a object in js

let obj = {
  //key:value  keys can be string only
    a:10,
    b:'abcd',
    c:true,
    d: function(){
        console.log(this)
    }
}
/*other way to access key if they are not string or string is
obj['10'] obj['a']*/
console.log(obj);
//console.log(obj.a); in this way each varaible defined in a obj can be called

//if we call console.log(obj.d) then 'this'  will point to the obj which contain d 
//if this is called via an object then it will point to that object
//else it will point to the current scope

let obj2 = {
    a:10,
    b:'abcd',
    c:true,
    d: function(){
        console.log(this)
    },
    e:{ // defining a new object within a object
        l:123,
        m:"hij"
    }
}

