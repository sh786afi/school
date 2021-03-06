"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSubjectOfStudent = exports.updateStudentbyId = exports.deleteStudentbyId = exports.getStudentbyId = exports.getStudent = exports.addStudent = void 0;

var _studentModel = require("../models/studentModel");

var _mongoose = require("mongoose");

const addStudent = async (req, res) => {
  const _id = req.params.id;
  const createStudent = new _studentModel.studentModel(req.body); //console.log('abcccc',req.body);

  try {
    console.log(createStudent);
    await createStudent.save();
    res.status(200).send({
      createStudent
    });
  } catch (e) {
    //console.log(createStudent);
    res.status(400).send(e);
  }
}; //Get all Subject api


exports.addStudent = addStudent;

const getStudent = async (req, res) => {
  try {
    const allStudents = await _studentModel.studentModel.find({});
    res.send(allStudents);
  } catch (e) {
    //console.log(allStudents);
    res.status(500).send(e);
  }
}; //Get Subject By id


exports.getStudent = getStudent;

const getStudentbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const StudentById = await _studentModel.studentModel.findById(_id);

    if (!StudentById) {
      return res.status(400).send();
    }

    res.send(StudentById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.getStudentbyId = getStudentbyId;

const deleteStudentbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const deleteStudentById = await _studentModel.studentModel.findByIdAndRemove(_id);

    if (!deleteStudentById) {
      return res.status(400).send();
    }

    res.send(deleteStudentById);
  } catch (e) {
    //console.log(deleteStudentById);
    res.status(500).send(e);
  }
};

exports.deleteStudentbyId = deleteStudentbyId;

const updateStudentbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const updateStudentById = await _studentModel.studentModel.findByIdAndUpdate(_id, req.body, {
      new: true
    });

    if (!updateStudentById) {
      return res.status(404).send();
    }

    res.send(updateStudentById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
}; //pending


exports.updateStudentbyId = updateStudentbyId;

const getAllSubjectOfStudent = async (req, res) => {
  const classId = req.params.classId;
  console.log('iddddd', classId);

  try {
    const SubjectByClassId = await subjectModel.findOne({
      classId: classId
    });
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

exports.getAllSubjectOfStudent = getAllSubjectOfStudent;