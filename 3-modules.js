// CommonJS is used by Node (under the hood), & every file is module (by default)
// Modules are encapsulated code (only share what we want, a minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

// Require function below actually imports any *executed* functions from whatever file is imported--EVEN though it's not assigned a variable name like above, AND there are no exports in 7-mind-grenade.js
require("./7-mind-grenade");

// Interesting example below, b/c ALL data from alternative-flavor.js is pulled in here, so it pulls it in as a single object w/multiple key:value pairs, one for each thing that is imported from alternative-flavor.js

console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
