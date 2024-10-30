import express from "express";
import path from "path";

const rootRouter = express.Router();
const __dirname = path.resolve();

const home = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'index.html'));
};

const coffee = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'coffee.html'));
};

const Food = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'Food.html'));
};

const Bar = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'Bar.html'));
};

const CarShare = (req, res) => {
  return res.sendFile(path.join(__dirname, 'views', 'CarShare.html'));
};

rootRouter.get("/", home);
rootRouter.get("/coffee", coffee);
rootRouter.get("/Food", Food);
rootRouter.get("/Bar", Bar);
rootRouter.get("/CarShare", CarShare);


export default rootRouter;


