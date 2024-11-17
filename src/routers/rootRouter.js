import express from "express";
import { Random, Report, postBar, postCarShare, postCoffee, postFood } from "../controllers/surveyController";
import { getlogin, postlogin, getjoin, postjoin, home, coffee, Food, Bar, CarShare } from "../controllers/controller";
import { protectorMiddleware } from "../controllers/etcController";

const rootRouter = express.Router();

rootRouter.get("/", home);

rootRouter.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("로그아웃 중 오류 발생:", err);
        return res.status(500).send("로그아웃에 실패했습니다.");
      }
      res.redirect('/'); // 로그아웃 후 홈 페이지로 리다이렉트
    });
  })


rootRouter.get("/join", getjoin);
rootRouter.post("/join", postjoin);

rootRouter.get("/login", getlogin);
rootRouter.post("/login", postlogin);

rootRouter.get("/coffee", coffee);
rootRouter.post("/coffee", postCoffee)

rootRouter.get("/food", Food);
rootRouter.post("/food", postFood)

rootRouter.get("/bar", Bar);
rootRouter.post("/bar", postBar)

rootRouter.get("/carshare",protectorMiddleware, CarShare);
rootRouter.post("/carshare",protectorMiddleware, postCarShare)

rootRouter.get("/CNU_report",Report)

rootRouter.get("/random",Random)


export default rootRouter;


