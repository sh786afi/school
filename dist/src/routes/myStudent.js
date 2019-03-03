"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSubjectOfStudent = exports.updateStudentbyId = exports.deleteStudentbyId = exports.getStudentbyId = exports.getStudent = exports.addStudent = undefined;

var _studentModel = require("../models/studentModel");

var _mongoose = require("mongoose");

var addStudent = exports.addStudent = async function addStudent(req, res) {
  var _id = req.params.id;
  var createStudent = new _studentModel.studentModel(req.body);
  //console.log('abcccc',req.body);
  try {
    console.log(createStudent);
    await createStudent.save();
    res.status(200).send({ createStudent: createStudent });
  } catch (e) {
    //console.log(createStudent);
    res.status(400).send(e);
  }
};
//Get all Subject api
var getStudent = exports.getStudent = async function getStudent(req, res) {
  try {
    var allStudents = await _studentModel.studentModel.find({});
    res.send(allStudents);
  } catch (e) {
    //console.log(allStudents);
    res.status(500).send(e);
  }
};
//Get Subject By id
var getStudentbyId = exports.getStudentbyId = async function getStudentbyId(req, res) {
  var _id = req.params.id;
  try {
    var StudentById = await _studentModel.studentModel.findById(_id);
    if (!StudentById) {
      return res.status(400).send();
    }
    res.send(StudentById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var deleteStudentbyId = exports.deleteStudentbyId = async function deleteStudentbyId(req, res) {
  var _id = req.params.id;
  try {
    var deleteStudentById = await _studentModel.studentModel.findByIdAndRemove(_id);
    if (!deleteStudentById) {
      return res.status(400).send();
    }
    res.send(deleteStudentById);
  } catch (e) {
    //console.log(deleteStudentById);
    res.status(500).send(e);
  }
};
var updateStudentbyId = exports.updateStudentbyId = async function updateStudentbyId(req, res) {
  var _id = req.params.id;
  try {
    var updateStudentById = await _studentModel.studentModel.findByIdAndUpdate(_id, req.body, { new: true });
    if (!updateStudentById) {
      return res.status(404).send();
    }
    res.send(updateStudentById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
};
//pending
var getAllSubjectOfStudent = exports.getAllSubjectOfStudent = async function getAllSubjectOfStudent(req, res) {
  var classId = req.params.classId;
  console.log('iddddd', classId);
  try {
    var SubjectByClassId = await subjectModel.findOne({ classId: classId });
    console.log('subbiddddd', SubjectByClassId);
    if (!SubjectByClassId) {
      return res.status(400).send();
    }
    res.send(SubjectByClassId);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};