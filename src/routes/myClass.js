import {modelClass} from "../models/classModel";
import {bodyParser} from "body-parser";
import { userInfo } from "os";
import {express} from "express";
import {mongoose} from "../db/mongoose"
//Add a new Class API
export const addClass = async (req, res) => {
  const createClass =  new modelClass(req.body);
  // console.log('abcccc',req.body);
  try{
    console.log(createClass);
    await createClass.save();
    res.status(200).send({createClass});
  }catch(e){
    console.log(createClass);
    res.status(400).send(e)
  }
    };
//Get all Class api
export const getClass = async(req,res)=>{
    try{
      const allClasses=await modelClass.find({});
      res.send(allClasses);
    }catch(e){
      //console.log(modelClass);
      res.status(500).send(e);
    }
}; 
  export const getClassbyId = async(req,res)=>{
    const _id = req.params.id;
    try{
      const classById=await modelClass.findById(_id);
      if(!classById){
        return res.status(400).send()
      }
      res.send(classById);
    }catch(e){
      //console.log(modelClass);
      res.status(500).send(e);
    }
 }; 
 export const deleteClassbyId = async(req,res)=>{
  const _id = req.params.id;
  try{
    const deleteClassById=await modelClass.findByIdAndRemove(_id);
    if(!deleteClassById){
      return res.status(400).send()
    }
    res.send(deleteClassById);
  }catch(e){
    //console.log(modelClass);
    res.status(500).send(e);
  }
}; 
export const updateClassbyId = async(req,res)=>{
  const _id = req.params.id;
  try{
    const updateClassById=await modelClass.findByIdAndUpdate(_id,req.body,{new:true});
    if(!updateClassById){
      return res.status(404).send()
    }
    res.send(updateClassById);
  }catch(e){
    //console.log(modelClass);
    res.status(400).send(e);
  }
}; 