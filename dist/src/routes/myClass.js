"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassbyId = exports.deleteClassbyId = exports.getClassbyId = exports.getClass = exports.addClass = void 0;

var _classModel = require("../models/classModel");

var _bodyParser = require("body-parser");

var _os = require("os");

var _express = require("express");

var _mongoose = require("../db/mongoose");

//Add a new Class API
const addClass = async (req, res) => {
  const createClass = new _classModel.modelClass(req.body); // console.log('abcccc',req.body);

  try {
    console.log(createClass);
    await createClass.save();
    res.status(200).send({
      createClass
    });
  } catch (e) {
    console.log(createClass);
    res.status(400).send(e);
  }
}; //Get all Class api


exports.addClass = addClass;

const getClass = async (req, res) => {
  try {
    const allClasses = await _classModel.modelClass.find({});
    res.send(allClasses);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.getClass = getClass;

const getClassbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const classById = await _classModel.modelClass.findById(_id);

    if (!classById) {
      return res.status(400).send();
    }

    res.send(classById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.getClassbyId = getClassbyId;

const deleteClassbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const deleteClassById = await _classModel.modelClass.findByIdAndRemove(_id);

    if (!deleteClassById) {
      return res.status(400).send();
    }

    res.send(deleteClassById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};

exports.deleteClassbyId = deleteClassbyId;

const updateClassbyId = async (req, res) => {
  const _id = req.params.id;

  try {
    const updateClassById = await _classModel.modelClass.findByIdAndUpdate(_id, req.body, {
      new: true
    });

    if (!updateClassById) {
      return res.status(404).send();
    }

    res.send(updateClassById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
};

exports.updateClassbyId = updateClassbyId;