"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;

var modelClass = _mongoose.default.model('ClassRoom', new _mongoose.default.Schema({
  ClassName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  CapacityOfStudent: {
    type: Number,
    required: true
  }
}));

module.exports = {
  modelClass
};