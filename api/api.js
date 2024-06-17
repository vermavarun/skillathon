var express = require("express");
var cors = require('cors')
var app = express();

app.get("/", cors(),(req, res, next) => {
    res.json({"message":"No alternative to learn DOCKER ! ⛴️"});
   });
app.listen(3100, () => {
 console.log("Server running on port 3100");
});