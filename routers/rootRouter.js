import express from "express";
import path from "path";

const rootRouter = express.Router();
const __dirname = path.resolve();

// 루트 경로로 요청이 오면 index.html 파일을 반환
const home = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
};

rootRouter.get("/", home);

export default rootRouter;


