import express from "express";
import rootRouter from "../routers/rootRouter";
import path from 'path';

const app = express();
const PORT = 5000;

// 현재 디렉토리 경로
const __dirname = path.resolve();

// 정적 파일 경로 설정
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "views")));

// 라우터 설정
app.use("/", rootRouter);

const handleListening = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
