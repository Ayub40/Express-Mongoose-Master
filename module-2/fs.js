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

// const fs = require('fs');

// console.log("Task 1");

// // Task 2
// // let text;
// let text = "node js";

// fs.writeFile("./hello.txt", text, { encoding: "utf-8" }, (err) => {
//     if (err) {
//         console.log("Something went wrong", err);
//         return
//     }
//     console.log("Written successfully");
// })

// fs.readFile('./hello.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("Something went wrong", err);
//         return
//     }

//     text = data;
//     console.log(text, "inside callback");
//     // console.log(data);
// });

// // console.log(data);
// console.log(text);

// console.log("Task 3");

// ==============================================================================


// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });

// ==============================================================================
// ==============================================================================
// ==============================================================================

// 13-4 Buffer and Streaming

const fs = require('fs');

// fs.readFile('./hello-world.txt', { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("Something went wrong", err);
//         return
//     }

//     fs.writeFile("./hello.txt", data, { encoding: "utf-8" }, (err) => {
//         if (err) {
//             console.log("Something went wrong", err);
//             return
//         }
//         console.log("Written successfully");
//     })

// });

const readStream = fs.createReadStream("./hello-world.txt", { encoding: "utf-8" })
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" })

readStream.on("data", (data) => {
    console.log(data);

    writeStream.write(data, (err) => {
        if (err) {
            throw Error("Error", err)
        }
    })
})

readStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})

// if writeStream e error alada vave catch korte cai, tahole ei code,, opore writeStream er catch er code deoa ase
writeStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})

readStream.on("end", () => {
    console.log("reading ended");
    writeStream.end()
})

writeStream.on("finish", () => {
    console.log("Written successfully");
})



