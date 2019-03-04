"use strict";

var _app = require("./app");

const PORT = process.env.PORT || 3000;

_app.app.listen(PORT, () => {
  console.log(`Start on Port ${PORT}`);
});