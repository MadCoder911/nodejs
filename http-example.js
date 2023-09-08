const { get } = require("https");

get("https://www.google.com", (res) => {
  //event emmiter
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});
