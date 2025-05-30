// 13-2 Synchronous way to read and write files

// 1.Synchronous
// 1.file read / I/O intensive task --> single thread --> not go thread pool -->

// 2. Asynchronous
// 1.file read --> single thread --> event loop --> thread pool --> task completion

// Start ,,,,  const fs = require("fs"); --> eta 13.3 module e ase tai ekhane comment kore rakshi, naile kaj korbe na

// const fs = require("fs");

// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

// console.log("Task 1");


// const text = "Learning File System";

// fs.writeFileSync("./hello.txt", text)

// console.log("Task 3");

// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

// console.log("Task 4");

// console.log(data);

// ==============================================================================
// ==============================================================================
// ==============================================================================

// 13-3 Asynchronous way to read and write files

const fs = require('fs');

console.log("Task 1");

// Task 2
// let text;
let text = "node js";

fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err) => {
    if (err) {
        console.log("Something went wrong", err);
        return
    }
    console.log("Written successfully");
    // console.log("After writing:", data);
})

fs.readFile('./hello.txt', { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Something went wrong", err);
        return
    }

    text = data;
    console.log(text, "inside callback");
    // console.log(text, "Written successfully");
    // console.log(data);
});

// console.log(data);
console.log(text);

console.log("Task 3");




// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });