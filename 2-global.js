//modules
// every file is a module
const names = require("./4-names");
const sayHi = require("./5-utils");
console.log(names);
console.log(sayHi);
sayHi(names.name);
// sayHi("Ahmed");
