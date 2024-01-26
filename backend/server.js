const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Form = require("./models/form");

const SECRET_KEY = "guru";
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://ruyash:ruyash@evt.qrcw2nd.mongodb.net/userdb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server connected to port 3001 and MongoDb");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Server and/or MongoDB", error);
  });

// middleware
app.use(bodyParser.json());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204, // Set to 204 for preflight requests
  })
);

//Routes
// REGISTER
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newForm = new User({ email, username, password: hashedPassword });
    await newForm.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//GET Registered Users
app.get("/signup", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
});

//LOGIN

app.post("/login", async (req, res) => {
  try {
    console.log("Received login request:", req.body);

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ error: "User not found. Please check your username." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Incorrect password. Please check your password." });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });

    res.status(200).json({ token });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(422)
        .json({ error: "Validation error", details: error.errors });
    }
    res.status(500).json({ error: "Error logging in" });
  }
});

app.post("/event-registration", async (req, res) => {
  try {
    const { fullName, email, studentId, college, department, contact } =
      req.body;
    const newUser = new Form({
      fullName,
      email,
      studentId,
      college,
      department,
      contact,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

// app.get('/event-registration', async (req, res) => {
//     try {
//         const use = await Form.find()
//         res.status(201).json(use)

//     } catch (error) {
//         res.status(500).json({ error: 'Unable to get users' })
//     }
// })
