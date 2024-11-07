import express from "express";
import rootRouter from "./routers/rootRouter";
import path from 'path';
import "./db"
import "./models/Survey"

const app = express();
const PORT = 3000;


// 현재 디렉토리 경로
const __dirname = path.resolve();

app.set('view engine', 'ejs'); //set up
app.set('views', process.cwd() + "/src/views")

// 정적 파일 경로 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src", "public")));

// 라우터 설정
app.use("/", rootRouter);

const handleListening = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
