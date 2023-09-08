const { readFileSync, writeFileSync } = require("fs");
//read file sync and write file sync are blocking code
console.log("start");

// Read file sync
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// Create new files if the file path does not exist
// flag "a" makes it write new text without deleting old one
writeFileSync("./content/result-sync.txt", "Hello world new file", {
  flag: "a",
});
console.log("done with this task1");
console.log("starting next");
