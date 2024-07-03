const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongooseConnection");
const usersRouter = require("./routes/usersRouter");

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/users", usersRouter);

app.listen(3000);
