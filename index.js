// console.log("====== global-objects.js =======");
// require('./global-objects');

// console.log("====== os-module.js =======");
// require('./os-module');

// console.log("====== path-module.js =======");
// require('./path-module');

// console.log("====== fs-module.js =======");
// require('./fs-module');

// console.log("====== url-module.js =======");
// require("./url-module");

// console.log("My first node-app");

// console.log("====== global-objects.js =======");
// require('./global-objects');

// console.log("====== os-module.js =======");
// require('./os-module');

// console.log("====== path-module.js =======");
// require('./path-module');

// console.log("====== url-module.js =======");
// require('./url-module');

// console.log("====== url-moduleAssignment.js =======");
// require('./url-moduleAssign');




const http = require("http");

const httpServer = http.createServer((request, response) => {
  console.log("I have received request....");
  console.log("Let me response....");
  response.end("Hello, from server....");
});

httpServer.listen(8080, () => {
  console.log(`Server started on port 8080`);
});

console.log("My first node-app");
