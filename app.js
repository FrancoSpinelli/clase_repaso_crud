const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen("3000", () => console.log("Servidor corriendo en puerto 3000!"));
app.set("view engine", "ejs");

const mainRoute = require("./routes/mainRoute");
const usersRoute = require("./routes/usersRoute");

app.use("/", mainRoute);
app.use("/users", usersRoute);

// app.use('/users', usersRoute)

// const usersRoute = require("")
