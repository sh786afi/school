"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassbyId = exports.deleteClassbyId = exports.getClassbyId = exports.getClass = exports.addClass = undefined;

var _classModel = require("../models/classModel");

var _bodyParser = require("body-parser");

var _os = require("os");

var _express = require("express");

var _mongoose = require("../db/mongoose");

//Add a new Class API
var addClass = exports.addClass = async function addClass(req, res) {
  var createClass = new _classModel.modelClass(req.body);
  // console.log('abcccc',req.body);
  try {
    console.log(createClass);
    await createClass.save();
    res.status(200).send({ createClass: createClass });
  } catch (e) {
    console.log(createClass);
    res.status(400).send(e);
  }
};
//Get all Class api
var getClass = exports.getClass = async function getClass(req, res) {
  try {
    var allClasses = await _classModel.modelClass.find({});
    res.send(allClasses);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var getClassbyId = exports.getClassbyId = async function getClassbyId(req, res) {
  var _id = req.params.id;
  try {
    var classById = await _classModel.modelClass.findById(_id);
    if (!classById) {
      return res.status(400).send();
    }
    res.send(classById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var deleteClassbyId = exports.deleteClassbyId = async function deleteClassbyId(req, res) {
  var _id = req.params.id;
  try {
    var deleteClassById = await _classModel.modelClass.findByIdAndRemove(_id);
    if (!deleteClassById) {
      return res.status(400).send();
    }
    res.send(deleteClassById);
  } catch (e) {
    //console.log(modelClass);
    res.status(500).send(e);
  }
};
var updateClassbyId = exports.updateClassbyId = async function updateClassbyId(req, res) {
  var _id = req.params.id;
  try {
    var updateClassById = await _classModel.modelClass.findByIdAndUpdate(_id, req.body, { new: true });
    if (!updateClassById) {
      return res.status(404).send();
    }
    res.send(updateClassById);
  } catch (e) {
    //console.log(modelClass);
    res.status(400).send(e);
  }
};