import express from "express";
import rootRouter from "./routers/rootRouter";
import path from 'path';
import "./db"
import "./models/Survey"
import "./models/User"
import "./models/Image"
import session from "express-session"
import MongoStore from "connect-mongo"


const app = express();
const PORT = 3000;


// 현재 디렉토리 경로
const __dirname = path.resolve();

app.set('view engine', 'ejs'); //set up
app.set('views', process.cwd() + "/src/views")

// 정적 파일 경로 설정
app.use("/uploads", express.static("uploads"));

app.use(express.static(path.join(__dirname, "src", "public")));
app.use(express.urlencoded({ extended: true }));


// multer 미들웨어임



app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.DB_URL})
    })
  );

app.use((req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn || false; 
  res.locals.loggedInUser  = req.session.user || {}
  next()
});

// 라우터 설정
app.use("/", rootRouter);



const handleListening = () => console.log(`✅ 서버 연결 완료 http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
