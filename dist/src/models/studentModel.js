"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _classModel = _interopRequireDefault(require("./classModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;

var studentModel = _mongoose.default.model('STUDENT', new Schema({
  StudentName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  RoleNo: {
    type: Number,
    required: true
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: 'modelClass'
  }
}));

module.exports = {
  studentModel
};