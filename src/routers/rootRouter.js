import express from "express";
import { Random, Report, postBar, postCarShare, postCoffee, postFood } from "../controllers/surveyController";
import { home, coffee, Food, Bar, CarShare } from "../controllers/controller";

const rootRouter = express.Router();

rootRouter.get("/", home);

rootRouter.get("/coffee", coffee);
rootRouter.post("/coffee", postCoffee)

rootRouter.get("/food", Food);
rootRouter.post("/food", postFood)

rootRouter.get("/bar", Bar);
rootRouter.post("/bar", postBar)

rootRouter.get("/carshare", CarShare);
rootRouter.post("/carshare", postCarShare)

rootRouter.get("/CNU_report",Report)

rootRouter.get("/random",Random)


export default rootRouter;


