const mongoose = require("mongoose");
const express = require("express");

const app = express();

/* ======================
   MIDDLEWARE
====================== */
app.use(express.json());
app.use(express.static(__dirname));

/* ======================
   MONGO DB CONNECT
====================== */
mongoose.connect(
  "mongodb+srv://konulazadli05_db_user:DataPrime2026@cluster0.e2jrc15.mongodb.net/dataprime?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo error:", err));

/* ======================
   MODEL
====================== */
const RegistrationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  course: String,
  educationType: String
});

const Registration = mongoose.model("Registration", RegistrationSchema);

/* ======================
   COURSES DATA
====================== */
const courses = [
  { id: 1, name: "Python", desc: "Python proqramlaşdırmaya giriş..." },
  { id: 2, name: "SQL", desc: "Database ilə işləmə..." },
  { id: 3, name: "Power BI", desc: "Data vizualizasiya..." }
];

/* ======================
   API: COURSES
====================== */
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

/* ======================
   API: COURSE DETAIL
====================== */
app.get("/api/course/:id", (req, res) => {
  const course = courses.find(c => c.id == req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course tapılmadı" });
  }

  res.json(course);
});

/* ======================
   REGISTER API
====================== */
app.post("/api/register", async (req, res) => {
  try {
  const { name, phone, course, educationType } = req.body;

  console.log(req.body); // <-- Bunu bura əlavə et

  if (!name || !phone || !course) {
    return res.status(400).json({
      message: "Bütün xanaları doldurun!"
    });
  }

  const exists = await Registration.findOne({ phone });

  if (exists) {
    return res.status(409).json({
      message: "⚠ Bu nömrə artıq qeydiyyatdan keçib!"
    });
  }

  await Registration.create({
    name,
    phone,
    course,
    educationType
  });

  return res.status(200).json({
    message: "Qeydiyyat uğurla tamamlandı!"
  });


} catch (err) {
  console.log("REGISTER ERROR:", err);

  return res.status(500).json({
    message: "Server xətası baş verdi!"
  });
}

}); 

/* ======================
   ADMIN PANEL API
====================== */
app.get("/api/registrations", async (req, res) => {
  try {
    const data = await Registration.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Məlumatlar alınmadı" });
  }
});

app.delete("/api/registrations/:id", async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: "Silindi" });
  } catch (err) {
    res.status(500).json({ message: "Silinmədi" });
  }
});
/* ======================
   START SERVER
====================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
