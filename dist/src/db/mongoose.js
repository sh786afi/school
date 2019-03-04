"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.Promise = global.Promise;

_mongoose.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SchoolDB');

module.exports = {
  mongoose: _mongoose.default
};