import express from "express";
import { Report, postCoffee } from "../controllers/surveyController";

const rootRouter = express.Router();

// Route Handlers
const home = (req, res) => {
  return res.render("index");
};

const coffee = (req, res) => {
  return res.render("coffee");
};

const Food = (req, res) => {
  return res.render("Food");
};

const Bar = (req, res) => {
  return res.render("index");
};

const CarShare = (req, res) => {
  return res.render("CarShare");
};



rootRouter.get("/", home);
rootRouter.get("/coffee", coffee);
rootRouter.get("/Food", Food);
rootRouter.get("/Bar", Bar);
rootRouter.get("/CarShare", CarShare);
rootRouter.post("/coffee", postCoffee)
rootRouter.get("/CNU_report",Report)

export default rootRouter;


