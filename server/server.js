const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("MySQL connection failed:");
        console.log(err.message);
    } else {
        console.log("MySQL connected successfully");
    }
});

// Authentication routes
app.use("/api/auth", authRoutes(db));

// Test route
app.get("/", (req, res) => {
    res.send("Sky Mart Backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});