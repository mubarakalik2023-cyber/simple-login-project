const express = require("express");
const path = require("path");
const app = express();

// CSS and JS
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Login Page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Signup Page
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// API
app.get("/api/student", (req, res) => {
    res.json({
        id: 1,
        name: "Vasu",
        course: "Python"
    });
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});


