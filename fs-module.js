// var fs = require('fs');
// fs.readFile('sample.txt', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });



// Import the filesystem module
const fs = require("fs");

let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

fs.writeFile("output.txt", data, (err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written file has the following contents:");
        console.log(fs.readFileSync("output.txt", "utf8"));
    }
});