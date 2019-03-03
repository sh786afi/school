"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _classModel = require("./classModel");

var _classModel2 = _interopRequireDefault(_classModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var studentModel = _mongoose2.default.model('STUDENT', new Schema({
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
    classId: { type: Schema.Types.ObjectId, ref: 'modelClass' }
}));
module.exports = { studentModel: studentModel };