// Loading a package we installed to use it
const _ = require("lodash");

// Testing package by using lodash `.flattenDeep` method of simplifying an array
const items = [1, [2, [3, 4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
