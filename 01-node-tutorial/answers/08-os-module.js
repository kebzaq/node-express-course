// OS
const os = require("os");
// console.log(os);

// current user info:
console.log(os.userInfo());

// current OS info:
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

// current os version:
console.log(os.version());

// current hostname:
console.log(os.hostname());
