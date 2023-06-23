const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
