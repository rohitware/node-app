const http = require("http");

const httpServer = http.createServer((request, response) => {
  const url = request.url;

  console.log(`Received url: ${url}`);
  switch (url) {
    case "/":
      response.end(`Home content`);
      break;
    case "/home":
      response.end(`Home content`);
      break;
    case "/about":
      response.end(`About content`);
      break;

    case "/project":
      response.end(`Project content`);
      break;

    case "/skills":
      response.end(`skills content`);
      break;
    default:
      response.end(`invalid URL`)

      break;
  }
 // response.end(`Request URL - ${url}`);
});

httpServer.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
