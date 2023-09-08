const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

promise
  .then((result) => result + "!")
  .then((res2) => {})
  .catch((err) => {
    console.log("error" + err);
  })
  .finally(() => console.log("done"));
// finally runs after the promise finished, wether it was resolved, rejected, or threw an error
// waits for all promises to resolve fist
// Promise.all[(promise1, promise2, promise3)].then((val) => console.log(val));

//ASYNC AWAIT WAS ADDED IN ES8, It is the syntactix sugar of promises, makes promises look better and easier to use

//promise.race returns first promise to finish, promise.parallel , makes them all run at same time and returns them all
// promise.all has to have all promises resolved to work
// promise.allSettled returns fulfilled and rejected one so it works of one of the promises does not work
