import mongoose from "mongoose";
import modelClass from "./classModel"
var Schema = mongoose.Schema;
var subjectModel=mongoose.model('SUBJECT',new Schema({
    SubjectName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    classId:  { type: Schema.Types.ObjectId, ref: 'modelClass' }
}));
module.exports ={subjectModel};