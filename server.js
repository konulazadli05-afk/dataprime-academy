const mongoose = require("mongoose");
const express = require("express");

const app = express();

/* ======================
   MIDDLEWARE
====================== */
app.use(express.json());
app.use(express.static(__dirname));

/* ======================
   MONGO DB CONNECT (FIXED)
====================== */
mongoose.connect(
  "mongodb+srv://konulazadli05_db_user:mhmefQ9TtFhAnSQZ@cluster0.e2jrc15.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Mongo error:", err));

/* ======================
   MODEL
====================== */
const Registration = mongoose.model("Registration", {
  name: String,
  phone: String,
  course: String
});

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
   REGISTER API (FIXED)
====================== */
app.post("/api/register", async (req, res) => {
  try {
    const { name, phone, course } = req.body;

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

    await Registration.create({ name, phone, course });

    return res.status(200).json({
      message: "✅ Qeydiyyat uğurla tamamlandı!"
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);

    return res.status(500).json({
      message: "Server xətası baş verdi!"
    });
  }
});

/* ======================
   START SERVER
====================== */
app.listen(3000, () => {
  console.log("http://localhost:3000");
});