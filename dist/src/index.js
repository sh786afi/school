"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _mongoose = require("./db/mongoose");

var _myClass = require("./routes/myClass");

var _router = require("./router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.json());
app.use((0, _router2.default)());

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Start on Port " + PORT);
});