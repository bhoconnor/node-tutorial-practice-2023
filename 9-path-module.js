const path = require("path");

// Path.sep shows what separates a path
console.log(path.sep);

// Path.join joins a sequence of path parts using above separator
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log("path join:", filePath);

// Path.basename shows the base file ("test.txt" above)
const base = path.basename(filePath);
console.log("file base:", base);

// Path.resolve shows the absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("absolute file path:", absolute);
