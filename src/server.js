"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 5000;
app.get('/', function (req, res) {
    res.send("samples!!");
});
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    else {
        return console.log("Server started on port " + port);
    }
});
