const sayHi = (name) => {
  console.log(`Hello ${name}`);
};

module.exports = sayHi;

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
  });

// waits for all promises to resolve fist
// Promise.all[(promise1, promise2, promise3)].then((val) => console.log(val));
