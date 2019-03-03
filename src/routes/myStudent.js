import {studentModel} from "../models/studentModel";
import {ObjctId} from "mongoose"
export const addStudent=async(req,res)=>{
    const _id = req.params.id;
    const createStudent =  new studentModel(req.body);
    //console.log('abcccc',req.body);
    try{
      console.log(createStudent);
      await createStudent.save();
      res.status(200).send({createStudent});
    }catch(e){
      //console.log(createStudent);
      res.status(400).send(e)
    }
};
//Get all Subject api
export const getStudent = async(req,res)=>{
    try{
      const allStudents=await studentModel.find({});
      res.send(allStudents);
    }catch(e){
      //console.log(allStudents);
      res.status(500).send(e);
    }
}; 
//Get Subject By id
  export const getStudentbyId = async(req,res)=>{
    const _id = req.params.id;
    try{
      const StudentById=await studentModel.findById(_id);
      if(!StudentById){
        return res.status(400).send()
      }
      res.send(StudentById);
    }catch(e){
      //console.log(modelClass);
      res.status(500).send(e);
    }
 }; 
 export const deleteStudentbyId = async(req,res)=>{
  const _id = req.params.id;
  try{
    const deleteStudentById=await studentModel.findByIdAndRemove(_id);
    if(!deleteStudentById){
      return res.status(400).send()
    }
    res.send(deleteStudentById);
  }catch(e){
    //console.log(deleteStudentById);
    res.status(500).send(e);
  }
}; 
export const updateStudentbyId = async(req,res)=>{
  const _id = req.params.id;
  try{
    const updateStudentById=await studentModel.findByIdAndUpdate(_id,req.body,{new:true});
    if(!updateStudentById){
      return res.status(404).send()
    }
    res.send(updateStudentById);
  }catch(e){
    //console.log(modelClass);
    res.status(400).send(e);
  }
}; 
//pending
export const getAllSubjectOfStudent = async(req,res)=>{
    const classId = req.params.classId;
    console.log('iddddd',classId);
    try{
      const SubjectByClassId=await subjectModel.findOne({classId:classId});
      console.log('subbiddddd',SubjectByClassId);
      if(!SubjectByClassId){
        return res.status(400).send()
      }
      res.send(SubjectByClassId);
    }catch(e){
      //console.log(modelClass);
      res.status(500).send(e);
    }
 }; 
