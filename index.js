const fs = require("fs");
const express = require("express");

let app = express();
app.use(express.static('views'));
app.use(express.json());

app.get('/', function(req, res){ res.sendFile("index.html", {root: __dirname + '/views/personal'}) });



app.listen(8080);