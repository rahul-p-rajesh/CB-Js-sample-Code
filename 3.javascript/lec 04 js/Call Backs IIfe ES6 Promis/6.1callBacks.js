
//https://www.youtube.com/watch?v=8aGhZQkoFbQ

function doSomething (done) {
    console.log('1. doing something')
    setTimeout(done, 0)
}

doSomething(() => {
    console.log('2. it was done')
})

console.log('3. end')

//order of log is 1.--  2.-- 3.-- no async functionality
