import request from "supertest";
import {app} from "../src/app";

test("Should create a class", async ()=>{
    await request(app)
    .post('/class')
    .send({
        ClassName : 'batch1',
        CapcityOfStudent:25
    })
    .expect(200)
})
