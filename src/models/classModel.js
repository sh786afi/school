import mongoose from "mongoose";
var Schema = mongoose.Schema;
var modelClass=mongoose.model('ClassRoom',new mongoose.Schema({
    ClassName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    CapcityOfStudent:  {
        type: Number,
        required: true
        
    }
}));

module.exports = {modelClass};