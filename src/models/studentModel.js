import mongoose from "mongoose";
import modelClass from "./classModel"
var Schema = mongoose.Schema;
var studentModel=mongoose.model('STUDENT',new Schema({
    StudentName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    RoleNo:{
        type: Number,
        required:true
    },
    classId:  { type: Schema.Types.ObjectId, ref: 'modelClass' }
}));
module.exports ={studentModel};