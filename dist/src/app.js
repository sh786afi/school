"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = require("morgan");

var _mongoose = require("./db/mongoose");

var _myClass = require("./routes/myClass");

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _router.default)());
module.exports = {
  app
};