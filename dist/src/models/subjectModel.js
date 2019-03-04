"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _classModel = _interopRequireDefault(require("./classModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;

var subjectModel = _mongoose.default.model('SUBJECT', new Schema({
  SubjectName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  classId: {
    type: Schema.Types.ObjectId,
    ref: 'modelClass'
  }
}));

module.exports = {
  subjectModel
};