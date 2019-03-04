"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRouter;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _myClass = require("./routes/myClass");

var _mySubject = require("./routes/mySubject");

var _myStudent = require("./routes/myStudent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRouter() {
  const router = _express.default.Router();

  router.post("/class", _myClass.addClass);
  router.get("/class", _myClass.getClass);
  router.get("/class/:id", _myClass.getClassbyId);
  router.delete("/class/:id", _myClass.deleteClassbyId);
  router.patch("/class/:id", _myClass.updateClassbyId); //Subject

  router.post("/subject", _mySubject.addSubject);
  router.get("/subject", _mySubject.getSubject);
  router.get("/subject/:id", _mySubject.getSubjectbyId);
  router.delete("/subject/:id", _mySubject.deleteSubjectbyId);
  router.patch("/subject/:id", _mySubject.updateSubjectbyId);
  router.get("/subject/class/:id", _mySubject.getAllSubjectInClass); //Students

  router.post("/student", _myStudent.addStudent);
  router.get("/student", _myStudent.getStudent);
  router.get("/student/:id", _myStudent.getStudentbyId);
  router.delete("/student/:id", _myStudent.deleteStudentbyId);
  router.patch("/student/:id", _myStudent.updateStudentbyId);
  router.get("/student/class/:id", _myStudent.getAllSubjectOfStudent);
  return router;
}