"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSubjectInClass = exports.updateSubjectbyId = exports.deleteSubjectbyId = exports.getSubjectbyId = exports.getSubject = exports.addSubject = void 0;

var _subjectModel = require("../models/subjectModel");

var _mongoose = require("mongoose");

const addSubject = async (req, res) => {
  const _id = req.params.id;
  const createSubject = new _subjectModel.subjectModel(req.body); //console.log('abcccc',req.body);

  try {
    console.log(createSubject);
    await createSubject.save();
    res.status(200).send({
      createSubject
    });
  } catch (e) {
    //console.log(createSubject);
    res.status(400).send(e);
  }
}; //Get all Subject api


exports.addSubject = addSubject;

const getSubject = async (req, res) => {
  try {
    const allSubjects = await _subjectModel.subjectModel.find({});
    res.send(allSubjects);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
}; //Get Subject By id


exports.getSubject = getSubject;

const getSubjectbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const SubjectById = await _subjectModel.subjectModel.findById(_id);

    if (!SubjectById) {
      return res.status(400).send();
    }

    res.send(SubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.getSubjectbyId = getSubjectbyId;

const deleteSubjectbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const deleteSubjectById = await _subjectModel.subjectModel.findByIdAndRemove(_id);

    if (!deleteSubjectById) {
      return res.status(400).send();
    }

    res.send(deleteSubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.deleteSubjectbyId = deleteSubjectbyId;

const updateSubjectbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const updateSubjectById = await _subjectModel.subjectModel.findByIdAndUpdate(_id, req.body, {
      new: true
    });

    if (!updateSubjectById) {
      return res.status(404).send();
    }

    res.send(updateSubjectById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
}; // pendßing


exports.updateSubjectbyId = updateSubjectbyId;

const getAllSubjectInClass = async (req, res) => {
  const classId = req.params.classId;
  console.log('iddddd', classId);

  try {
    const SubjectByClassId = await _subjectModel.subjectModel.findOne({
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

exports.getAllSubjectInClass = getAllSubjectInClass;