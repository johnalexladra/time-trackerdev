const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.route");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err.message);
    });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

// users routes
app.use("/users", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});