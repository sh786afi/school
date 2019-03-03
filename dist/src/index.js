"use strict";

var _app = require("./app");

var PORT = process.env.PORT || 3000;
_app.app.listen(PORT, function () {
    console.log("Start on Port " + PORT);
});