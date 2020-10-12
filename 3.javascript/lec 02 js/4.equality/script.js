console.log(1 == '1') //true
console.log(1 === '1')//false

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

/*double equals (==) will perform a type conversion when comparing two things of diff data types,
                     and will handle NaN, -0, and +0 specially to conform to IEEE 754
                      (so NaN != NaN, and -0 == +0);

triple equals (===) will do the same comparison as double equals it will look it if both of them are reffering to same data 
                     (including the special handling for NaN, -0, and +0)
                      but without type conversion; if the types differ, false is returned.
Object.is           does no type conversion and no special handling for NaN, -0, and +0 
                    (giving it the same behavior as === except on those special numeric values).
                    giving it the same behavior as === except on those special numeric values).
*/

console.log(0 == '')//true as '' is converted as zero Number('') is 0
console.log(false == 'false')//false beause Number(false) --> 0  And Number('false') cannot be converted to a number
console.log(true == 'true')//false
console.log(false == '')//true as both gets converted to 0
console.log(false == '\n')//true

// now type caste consversion is not done for same data types
console.log([1,2] == [1,2])//false
 /*if 2 non primitive data which are not string boolean or int 
 are compare by == and returns true then both are pointing to same refference only
 */
