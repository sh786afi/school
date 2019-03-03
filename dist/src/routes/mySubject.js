"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSubjectInClass = exports.updateSubjectbyId = exports.deleteSubjectbyId = exports.getSubjectbyId = exports.getSubject = exports.addSubject = undefined;

var _subjectModel = require("../models/subjectModel");

var _mongoose = require("mongoose");

var addSubject = exports.addSubject = async function addSubject(req, res) {
  var _id = req.params.id;
  var createSubject = new _subjectModel.subjectModel(req.body);
  //console.log('abcccc',req.body);
  try {
    console.log(createSubject);
    await createSubject.save();
    res.status(200).send({ createSubject: createSubject });
  } catch (e) {
    //console.log(createSubject);
    res.status(400).send(e);
  }
};
//Get all Subject api
var getSubject = exports.getSubject = async function getSubject(req, res) {
  try {
    var allSubjects = await _subjectModel.subjectModel.find({});
    res.send(allSubjects);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
//Get Subject By id
var getSubjectbyId = exports.getSubjectbyId = async function getSubjectbyId(req, res) {
  var _id = req.params.id;
  try {
    var SubjectById = await _subjectModel.subjectModel.findById(_id);
    if (!SubjectById) {
      return res.status(400).send();
    }
    res.send(SubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var deleteSubjectbyId = exports.deleteSubjectbyId = async function deleteSubjectbyId(req, res) {
  var _id = req.params.id;
  try {
    var deleteSubjectById = await _subjectModel.subjectModel.findByIdAndRemove(_id);
    if (!deleteSubjectById) {
      return res.status(400).send();
    }
    res.send(deleteSubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var updateSubjectbyId = exports.updateSubjectbyId = async function updateSubjectbyId(req, res) {
  var _id = req.params.id;
  try {
    var updateSubjectById = await _subjectModel.subjectModel.findByIdAndUpdate(_id, req.body, { new: true });
    if (!updateSubjectById) {
      return res.status(404).send();
    }
    res.send(updateSubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
};
// pendßing
var getAllSubjectInClass = exports.getAllSubjectInClass = async function getAllSubjectInClass(req, res) {
  var classId = req.params.classId;
  console.log('iddddd', classId);
  try {
    var SubjectByClassId = await _subjectModel.subjectModel.findOne({ classId: classId });
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