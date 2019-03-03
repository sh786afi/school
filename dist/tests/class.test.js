"use strict";

var _supertest = require("supertest");

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require("../src/app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test("Should create a class", async function () {
    await (0, _supertest2.default)(_app.app).post('/class').send({
        ClassName: 'batch1',
        CapcityOfStudent: 25
    }).expect(200);
});