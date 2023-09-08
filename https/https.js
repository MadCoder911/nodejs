// import { send } from "./internals/request";
// import { read } from "./internals/response";
const internals = require("./internals");
function request(url, data) {
  internals.request.send(url, data);
  return internals.response.read();
}
request("https://google,com", "Hello");
