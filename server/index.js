//require("dotenv").config();
const express = require("express");
const path = require("path");
var compression = require('compression')

const app = express();
app.use(express.json());

// app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(compression(), express.static('client/dist'));
app.listen(3000);