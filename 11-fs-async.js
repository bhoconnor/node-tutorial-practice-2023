// Destructured way of doing fs.readFile & fs.writeFile

const { readFile, writeFile } = require("fs");

// readFile syntax is ([path], (error, result), then enter what to do if there's an error & what the result will be
console.log("start");
readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
