//Arrays
//defining an array
arr1 = [1,2,3];
arr2 = ['a','bs','ewr',true,1,2]
//to get element by index
console.log(arr1[0])
//to get length of arr 
console.log(arr1["length"])
console.log(arr1.length) // len is not a function it is the propertie of the array object


//iterating 
for(let i = 0;i< arr1.length;i++){
    console.log(arr1[i])
}
//to add element in the last
arr1.push(5)
//to add element in the front
arr1.unshift(65)
//to remove last element 
arr1.pop()
//to remove from the front
arr1.shift()
//to find index of a element
arr2.indexof('a')

//array slice
let song = ['acc','bcd','efg','hij','klm','mop','pqr','stu','wxyz']
console.log(song.slice(4)); // it will output from 4th index to the last
console.log(song.slice(4,7))
//slice does not alter with the array element 


//array splice

//removes all element after 4th index
//song.splice(4)

/*let deleted = song.splice(4);
console.log(deleted) // it will contain all the deleted element
console.log(song);
*/
//song.splice(4,2) // first is the indexfrom which it should be spliced and second is the number of element that has to be removed

//splice to replace data
song.splice(0,3,'sa','re','ga','ma')
console.log(song);


//array concat
//it does not alter with the original array
console.log(song.concat("sa"))//temporary add element at the last
console.log(song.concat("sa",'re','ga'))
console.log(song.concat(["sa",'re','ga']))