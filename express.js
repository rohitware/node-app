const express = require("express");
const app = express();
const mongoose = require("mongoose");
// To parse the request bodies
app.use(express.json());

console.log(`===== Mongo DB connection =====`);
// mongodb://localhost:27017/user_database
async function mongoConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/user_database");
    console.log("====== Connection successfully ==========");
  } catch (error) {
    console.log(error);
  }
}
mongoConnection();

// Defining Schema for Student
const schemaStudent = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    grade: { type: String },
    city: { type: String },
  },
  { collection: "student_collection" }
);

// Creating the Model for Schema: schemaStudent
const Student = mongoose.model("Student", schemaStudent);

// to fetch the dara
// app.get("/student", (request, response) => {
//   response.send(`Student data: ${request.url}`);
// });

//To retrieve or fetch the data
app.get("/students", async (request, response) => {
  const allStudents = await Student.find({});
  response.status(200).json({
    allStudents,
  });
});

// to post the resource
// To create the resource
app.post("/create", (request, response) => {
  const { name, age, gread, city } = request.body;
  Student.create({
    name,
    age,
    gread,
    city,
  });
  response.send(`Successfully created Student `);
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
