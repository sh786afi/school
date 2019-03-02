"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modelClass = _mongoose2.default.model('ClassRoom', new _mongoose2.default.Schema({
    ClassName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    CapcityOfStudent: {
        type: Number,
        required: true

    }
}));

module.exports = { modelClass: modelClass };