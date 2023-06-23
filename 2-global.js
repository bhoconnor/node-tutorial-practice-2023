// GLOBALS - NO WINDOW !!!!

// vv these 1st 2 have 2 underscores

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modeles (CommonJS)
// module       - info about current module (file)
// process      - info about env't where the program is being executed

console.log(__dirname);
console.log(__filename);

// Below writes message every second in console (could also use setTimeout, & other commands)
setInterval(() => {
  console.log("hello world");
}, 1000);
