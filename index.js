const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database connection
const db = require("./config/db.config.js");
const mysql = require("mysql");
const userRoutes = require('./routes/userRoutes.js');

const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DB
  });
  
connection.connect(error => {
if (error) throw error;
console.log("Successfully connected to the database.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the ecommerce backend!" });
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});