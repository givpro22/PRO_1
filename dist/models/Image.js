"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var imageSchema = new _mongoose["default"].Schema({
  fileUrl: {
    type: String,
    required: true
  },
  createUser: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  },
  meta: {
    views: {
      type: Number,
      "default": 0,
      required: true
    },
    rating: {
      type: Number,
      "default": 0,
      required: true
    }
  }
});
var Image = _mongoose["default"].model("Image", imageSchema);
var _default = exports["default"] = Image;