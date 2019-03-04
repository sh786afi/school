import request from "supertest";
import {app} from "../src/app";
import {modelClass} from "../src/models/classModel";
import mongoose from "mongoose";

const classOneId = new mongoose.Types.ObjectId()
const classOne = {
        _id: classOneId,
        ClassName : 'batch1New',
        CapacityOfStudent:25
}

beforeEach(async ()=>{
    await modelClass.deleteMany();
    const createClass=new modelClass(classOne);
    await createClass.save();
})
test("Should create a class", async ()=>{
    await request(app)
    .post('/class')
    .send({
        ClassName : 'batch1',
        CapacityOfStudent:25
    })
    .expect(200)
});
test("Should Not create a class with Invalid Data", async ()=>{
    await request(app)
    .post('/class')
    .send({})
    .expect(400)
});
test("Get All classes", async ()=>{
    await request(app)
    .get('/class')
    .expect(200)
    .expect((res)=>{
        expect(res.body.length).toBe(1);
    })
});
test("Get One classes By Id", async ()=>{
    await request(app)
    .get('/class/id')
    .expect(200)
    const findClass= await modelClass.findById(classOneId)
    expect(findClass).toBe(1);
});