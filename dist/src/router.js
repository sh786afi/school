"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRouter;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _myClass = require("./routes/myClass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouter() {
    var router = _express2.default.Router();

    router.post("/class", _myClass.addClass);
    router.get("/class", _myClass.getClass);
    router.get("/class/:id", _myClass.getClassbyId);
    router.delete("/class/:id", _myClass.deleteClassbyId);
    router.patch("/class/:id", _myClass.updateClassbyId);

    return router;
}