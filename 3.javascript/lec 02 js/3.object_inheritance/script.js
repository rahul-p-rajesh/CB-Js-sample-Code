//this is prototype based inheritance not class based inheritance
let obj1 = {
    //key:value  keys can be string only
      a:10,
      b:'abcd',
      c:true,
      d: function(){
          console.log(this)
      }
  }

let obj2 = Object.create(obj1);//this is called object to object inheritance
//this creates a obj2 object with obj1 as the prototype


/*so if you do obj2.a only while reading the data
  --> it will search in obj2 --> if not found
  -->then it will search in obj2.__proto__ which is the obj.1
  --> if not found then it will searcg in  obj2.__proto__.__proto__ 
  till  obj2.__proto__.__proto__ is null
*/

// so obj2.__proto__ is a debugger code that output all the variable of parent obj1

/* so if you do obj2.a = 20 
then in obj2 a varaible 'a' with value will be assigned automaticlly 
and obj1.a value will not be changed */

obj2.p = 'abc';
obj2.q = 'efg';
obj2.r = 'hij';

obj3 = Object.create(obj2);
//obj3.p will return 'abc' it is accesible
//obj3.a will return '10'  it is accesible
//so to conclude obj3.__proto__ == obj2
//and  obj3.__proto__.__proto__ == obj1
