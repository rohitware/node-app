 var fs = require('fs');
// fs.readFile('sample.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });



// Import the filesystem module
// const fs = require("fs");

// let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// fs.writeFile("output.txt", data, (err) => {
//     if (err) console.log(err);
//     else {
//         console.log("File written successfully\n");
//         console.log("The written file contents:");
//         console.log(fs.readFileSync("output.txt", "utf8"));
//     }
// });


const filePath = 'output.txt';

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(`File size: ${stats.size} bytes`);
    console.log('Is a file:', stats.isFile());
    console.log('Is a directory:', stats.isDirectory());
    console.log(`File was created on: ${stats.birthtime}`);
    console.log(`File was last modified on: ${stats.mtime}`);
    console.log('File Information:', stats);
});