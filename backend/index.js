const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
// mongoose.connect("mongodb+srv://kishanp:Kishan@grow123@cluster0.ylgu8gb.mongodb.net/kishanGrowDataBase")
// mongoose.connect("mongodb+srv://Kishan Patel:Kishan@grow123%40cluster0.ylgu8gb.mongodb.net/kishanGrowDataBase")
// mongoose.connect("mongodb+srv://kishanPatel:kishan@Patel%40cluster0.qkhl3go.mongodb.net/kishanGrowDataBase")
mongoose
  .connect(
    "mongodb+srv://kishanPatel:kishan%40Patel@cluster0.qkhl3go.mongodb.net/kishanGrowDataBase"
  )
  .then(() => console.log("connection sucessfully"))
  .catch((error) => {
    console.log("Failed to connect to MongoDB:", error);
    setTimeout(connectWithRetry, 5000);
  });

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});
const User = mongoose.model("UserData", UserSchema, "userdatas", {
  bufferTimeoutMS: 30000,
});

app.post("/api/register", async (req, res) => {
  console.log("req", req.body);
  // res.json({model})
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
});

app.post("/api/login", async (req, res) => {
  console.log("req", req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("user", user);
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    )
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(1337, () => {
  console.log("server started on 1337");
});
