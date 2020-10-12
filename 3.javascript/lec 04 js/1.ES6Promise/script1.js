/*//coding block content
function fakeDownload(done){//done is the call back function
    setTimeout(function(){
        let downloadedData = "Some data we ripped of the interweb";
        done(downloadedData);
    },1000)
}
console.log("process started")
fakeDownload(function(data){
    console.log("We downloaded a file, which had this data -->")
    console.log(data);

})
*/
//converting the above in a  promises
// interface that make promises available


function fakeDownloadedPromise (correct){ // this return a promise object
    return new Promise( function (resolve,reject){
        setTimeout(function(){
            let downloadedData = "Some data we ripped of the interweb";
            if(correct){
                resolve(downloadedData);
            }else{
                reject(new Error("Could not download file"))

            }
            
        },1000)
    })
}
/*
fakeDownloadedPromise(false).then(function(data){//.then is the resolve 
    console.log("We downloaded a file, which had this data -->")
    console.log(data);
}).catch(function (err){
    console.log(err)
})
*/
//to catch then function later on 
let downloaded = fakeDownloadedPromise(true);
downloaded.catch(function(err){
    console.log(err)
})

setTimeout(function(){
    downloaded.then(function(data){
        console.info("the data that we downloaded is this -->");
        console.info(data);

    })
},3000)