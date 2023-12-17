/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function wait2(t) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function wait3(t) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function calculateTime(t1, t2, t3) {
    const promise1=wait1(t1);
    const promise2=wait2(t2);
    const promise3=wait3(t3);

    const startTime=Date.now();
return  Promise.all([promise1,promise2,promise3]).
    then(()=>{
        const endTime=Date.now();
        console.log(startTime,endTime);
        const totaltime=endTime-startTime;
        return totaltime
    })
    // const promise1 = delay(t1);
    // const promise2 = delay(t2);
    // const promise3 = delay(t3);
  
    // const startTime = Date.now(); // Record start time
  
    // return Promise.all([promise1, promise2, promise3])
    //   .then(() => {
    //     const endTime = Date.now(); // Record end time
    //     const totalTime = endTime - startTime; // Calculate total time
    //     return `Total time taken: ${totalTime} milliseconds`;
    //   }); 
  
}

module.exports = calculateTime;
