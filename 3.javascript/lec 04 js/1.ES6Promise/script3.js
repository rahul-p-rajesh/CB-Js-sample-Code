//video
//https://www.youtube.com/watch?v=DHvZLI7Db8E&t=26s

/*A promise in js is a promise which
has two result 
    either it is completed which is --> resolve
    or it is failed which is        --> rejected

*/
//syntax
let p = new Promise( (resolve,reject)=>{
    //inside we define what the actiual promise is
    let a = 1+1;
    if(a == 2){
        //if a == 2 we resolve it
        resolve('Sucess')
    }else{
        //if a != 2 then we reject it 
        reject('a failed to be 2')
    }
})
//to interact with promise
/*                                                                          //uncomment the below line
p.then((message)=>{  //anything inside .then is going to run for resovlve
    console.log('the content in the .then '+message)
}).catch((message)=>{//they catch the reject
    console.log('the content in the catch '+message)
})
*/

//very similer to call back but a cleaner way to do so
//it is very great when used in async or background after a certain timeout


//1st example  with callBack
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = true
  
    if (userLeft) {
      errorCallback({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      errorCallback({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      callback('Thumbs up and Subscribe')
    }
  }
/*
  watchTutorialCallback((message) => {
    console.log(message)
  }, (error) => {
    console.log(error.name + ' ' + error.message)
  })
*/

//converting above code with promises
function watchTutorialPromise() {
    return new Promise((resolve,reject)=>{
        let userLeft = false
        let userWatchingCatMeme = true
  
        if (userLeft) {
            reject({
            name: 'User Left', 
            message: ':('
        })
        } else if (userWatchingCatMeme) {
            reject({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat' 
        })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
    
  }
/*
  watchTutorialPromise().then((message) => {
    console.log(message)
  }).catch((error) => {
    console.log(error.name + ' ' + error.message)
  })
*/


//2nd example promise .all
const recordVideoOne = new Promise((resolve, reject) => {
    let v1 = true;
    if(v1){
        resolve('Video 1 Recorded')
    }else{
        reject('Video 1 Not Recorded')
    }
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    let v2 = true;
    if(v2){
        resolve('Video 2 Recorded')
    }else{
        reject('Video 2 Not Recorded')
    }
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    let v3 = true;
    if(v3){
        resolve('Video 3 Recorded')
    }else{
        reject('Video 3 Not Recorded')
    }
  })
//3 simple promise which always resolve and never reject
//we can run all three

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
//read the first para
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  }).catch(messages =>{
      console.log(messages)
  })
/*
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {
    console.log(message)
  })
  */