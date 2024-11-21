import "dotenv/config";
import multer from "multer"
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

const s3Client = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const s3avataruploadFiles = multerS3({
  s3: s3Client,
  bucket: "sklookie-pro-1-2024",
  acl: "public-read",
  key: function (req, file, cb) {
    cb(null, `avatars/${req.session.user._id}/${Date.now().toString()}`);
  },
});

const s3imageuploadFiles = multerS3({
  s3: s3Client,
  bucket: "sklookie-pro-1-2024",
  acl: "public-read",
  key: function (req, file, cb) {
    cb(null, `images/${req.session.user._id}/${Date.now().toString()}`);
  },
});


export const avataruploadFiles = multer({
     limits: {fileSize:10000000},
    storage:s3avataruploadFiles

})

export const imageuploadFiles = multer({
     limits: {fileSize:10000000},
    storage:s3imageuploadFiles
})



