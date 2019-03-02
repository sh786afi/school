import express from "express";
import {morgan} from "morgan";
import {mongoose} from "./db/mongoose";
import {myclass} from "./routes/myClass"
import createRouter from "./router";

var app=express();
app.use(express.json());
app.use(createRouter());

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Start on Port ${PORT}`);
})