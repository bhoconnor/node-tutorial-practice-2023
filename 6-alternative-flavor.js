// Below could be const items... & then do separate export like in other files, either works
module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

// Similar to items export at top, except set = to a function ("person")
module.exports.singlePerson = person;
