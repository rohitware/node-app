const express = require("express");
const app = express();

// to fetch the dara
app.get("/student", (request, response) => {
  response.send(`Student data: ${request.url}`);
});

// to post the resource
app.post("/create", (request, response) => {
  response.send(`Student created successfully ${request.url}`);
});

// to update the resource
app.put("/update", (request, response) => {
  response.send(`Student updated successfully ${request.url}`);
});

// to delete the resource
app.delete("/delete", (request, response) => {
  response.send(`Student deleted successfully ${request.url}`);
});

app.listen(8080, () => {
  console.log(`server started...`);
});
