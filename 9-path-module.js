const path = require("path");
console.log(path.sep);

//Path from current place
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

//Last file name
const base = path.basename(filePath);
console.log(base);

// Root path starting from user
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
