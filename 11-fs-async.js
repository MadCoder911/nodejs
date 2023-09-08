const { readFile, writeFile, read } = require("fs");
console.log("start");
// readFile and writeFile are async non blocking code
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-sync.txt",
          `Hello there :${first}, ${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            } else {
              console.log("done with this task");
            }
          }
        );
      }
    });
  }
});
console.log("starting next");
