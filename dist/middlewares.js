"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageuploadFiles = exports.avataruploadFiles = void 0;
require("dotenv/config");
var _multer = _interopRequireDefault(require("multer"));
var _clientS = require("@aws-sdk/client-s3");
var _multerS = _interopRequireDefault(require("multer-s3"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var s3Client = new _clientS.S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET
  }
});
var s3avataruploadFiles = (0, _multerS["default"])({
  s3: s3Client,
  bucket: "sklookie-pro-1-2024",
  acl: "public-read",
  key: function key(req, file, cb) {
    cb(null, "avatars/".concat(req.session.user._id, "/").concat(Date.now().toString()));
  }
});
var s3imageuploadFiles = (0, _multerS["default"])({
  s3: s3Client,
  bucket: "sklookie-pro-1-2024",
  acl: "public-read",
  key: function key(req, file, cb) {
    cb(null, "images/".concat(req.session.user._id, "/").concat(Date.now().toString()));
  }
});
var avataruploadFiles = exports.avataruploadFiles = (0, _multer["default"])({
  limits: {
    fileSize: 10000000
  },
  storage: s3avataruploadFiles
});
var imageuploadFiles = exports.imageuploadFiles = (0, _multer["default"])({
  limits: {
    fileSize: 10000000
  },
  storage: s3imageuploadFiles
});