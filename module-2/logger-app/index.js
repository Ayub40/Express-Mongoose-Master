// console.log(process.argv);
const path = require("path");
const fs = require("fs");

const inputArguments = process.argv.slice(2)

const text = inputArguments.join(" ").concat("\n");

const timestamp = new Date().toISOString();
console.log(timestamp);

const message = `${text} ${timestamp} \n`
console.log(text);

if (!message) {
    console.log("* Please provide a message to loge");  
    console.log("Example : node index.js Hello World!!");
    process.exit(1)
}

const filePath = path.join(__dirname, "log.txt")

fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
    console.log("Your Log added Successfully ");
})

// console.log(inputArguments);
// console.log(text);
console.log(filePath);

/** 
 * terminal comment
 * 1. node index.js Hello World
 * 2. node index.js Hello World I am learning node js
 * 3. node index.js
 * 
 * */