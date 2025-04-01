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
  const { name, age, grade, city } = request.body;
  Student.create({
    name,
    age,
    grade,
    city,
  });
  response.send(`Successfully created Student `);
});

// To update the resource
app.put("/update", async (request, response) => {
  const { name, age, grade, city } = request.body;
  const studentDocument = await Student.findOneAndUpdate(
    { age: age }, // Find the students by age = 20
    { name: name, grade: grade, city: city }, // Update the fields
    { new: true, upsert: true }
  )
  response.status(200).json(studentDocument);
});


// To delete the resource using particular field 
// http://localhost:8080/delete/19
app.delete("/delete/:age", async (request, response) => {
  const age = request.params.age;
  const deletedStudent = await Student.findOneAndDelete({ age: age })
  if (!deletedStudent) {
    return response.status(404).json({
      "status": 404,
      "message": `Not Found, Student with age: ${age}`
    })
  }
  return response.status(200).json(deletedStudent);
});


app.listen(8080, () => {
  console.log(`server started...`);
});
