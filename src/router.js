import express from "express";
import bodyParser from "body-parser";
import {addClass,getClass,getClassbyId,deleteClassbyId,updateClassbyId} from "./routes/myClass";

export default function createRouter() {
    const router =  express.Router();

    router.post("/class", addClass);
    router.get("/class", getClass);
    router.get("/class/:id", getClassbyId);
    router.delete("/class/:id", deleteClassbyId)
    router.patch("/class/:id", updateClassbyId);

    return router;
}


