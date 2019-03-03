import express from "express";
import {morgan} from "morgan";
import {mongoose} from "./db/mongoose";
import {myclass} from "./routes/myClass";
import createRouter from "./router";

var app=express();
app.use(express.json());
app.use(createRouter());

module.exports = {app};