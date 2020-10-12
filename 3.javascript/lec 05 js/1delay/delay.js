//document.getElementById?? --> The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
//async and deffer
      //https://flaviocopes.com/javascript-async-defer/
      //async fetch the script asynchronsly
      //defer excecutes the script in background
//epoch unix
//how is computers calculate time
//threads??
//
let btnWait = document.getElementById("btnWait");
let btnCount = document.getElementById("btnCount");

let divStatus = document.getElementById("divStatus");
let divVal = document.getElementById("divVal");

let count = 0;

btnCount.onclick = () => {
  count++;
  console.log("count", count);
  divVal.textContent = count;
};

btnWait.onclick = function () {
  divStatus.textContent = "Waiting";

  //wrong way
  //let start = Date.now();//does not show waiting with while loop
  //while(Date.now() < start + 5000){/*do nothing*/}// this happens because browser will be busy in
  //the for loop that it wil not let any other operation to happen
  //divStatus.textContent = 'Done';

  //solution
  /*  //1 way
    let start = setTimeout(function(){
        divStatus.textContent = 'Done';
    },5000);
    start()
    */
  //2nd way
  setTimeout(() => {
    divStatus.textContent = "Done";
  }, 5000);
};

/**
 * 2 types of thread hardware thread software thread
 * thread are the sequence of event/instruction happeing
 *
 * hardware thread are the number of parallel calculation that a computer can do that is generally the alu computer has
 *     the number of parallel calculation at the exact same time a computer can do is number of hardware threads computer has
 * software thread as most of program stays ideal and dont get excecuted all the 100% of the time so we can run 2 or more program from the same thread as
 *      all of them will not get excecuted at the same time
 *      so the number of program to be excecuted can be gretaer that the number of thread and they can excecute one after the other (time based sharing) but as the operation
 *      is so fast it may look like all the program are being excecuted at the same time as parallel operation
 *      this is also called time division multiplexing
 */

//A process is the combination of threads(see 48 line) and memory

//******js interpreter is a single thread****
//browser is a multi thread that is multiple tab in a browser can have multiple script running at the same time
//browser thread are passed into cpu thread

//so if a while loop is used with a time comparing loop then every other function/process  is stopped in that thread until the while loop is completed
//now with setTimeOut the interpreter uses the computer's internal time to set a reminder instead of constanly checking the the time this free up the interpreter's thread

