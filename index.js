const express = require("express");
let app = express();

app.use(express.static('views'));

app.get('/', function(req, res){

    res.sendFile("index.html");
})

app.listen(8080);
