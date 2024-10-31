const { john, peter } = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");

sayHi("Susan");
sayHi(john);
sayHi(peter);

console.log(data);

// executing function without exporting
require("./07-mind-grenade");
