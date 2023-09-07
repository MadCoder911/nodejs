const os = require("os");
// info about current user
const user = os.userInfo();
console.log(user);
// Up time
const uptime = os.uptime();
console.log(uptime);
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
