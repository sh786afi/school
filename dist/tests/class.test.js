"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _app = require("../src/app");

var _classModel = require("../src/models/classModel");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const classOneId = new _mongoose.default.Types.ObjectId();
const classOne = {
  _id: classOneId,
  ClassName: 'batch1New',
  CapacityOfStudent: 25
};
beforeEach(async () => {
  await _classModel.modelClass.deleteMany();
  const createClass = new _classModel.modelClass(classOne);
  await createClass.save();
});
test("Should create a class", async () => {
  await (0, _supertest.default)(_app.app).post('/class').send({
    ClassName: 'batch1',
    CapacityOfStudent: 25
  }).expect(200);
});
test("Should Not create a class with Invalid Data", async () => {
  await (0, _supertest.default)(_app.app).post('/class').send({}).expect(400);
});
test("Get All classes", async () => {
  await (0, _supertest.default)(_app.app).get('/class').expect(200).expect(res => {
    expect(res.body.length).toBe(1);
  });
});
test("Get All classes", async () => {
  await (0, _supertest.default)(_app.app).get('/class/id').expect(200);
  const findClass = await _classModel.modelClass.findById(classOneId);
  expect(findClass).toBe(1);
});