import express from "express";
import Survey from "../models/survey";


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

const report = async(req,res) => {
  const surveys = await Survey.find({})
  return res.render("survey",{surveys})
}

const postCoffee = async (req, res) => {
  const {name,email,phone,feedback} = req.body

  try {
  await Survey.create({
    name:name,
    emailAdress: email,
    phoneNumber: phone,
    Suggestions: feedback,
    date: Date.now()
  })
  return res.redirect('/');
}
  catch(error){
    return res.sendFile(path.join(__dirname, 'src', 'views', 'coffee.html'));
  }
}


rootRouter.get("/", home);
rootRouter.get("/coffee", coffee);
rootRouter.get("/Food", Food);
rootRouter.get("/Bar", Bar);
rootRouter.get("/CarShare", CarShare);
rootRouter.post("/coffee", postCoffee)
rootRouter.get("/CNU_report",report)
export default rootRouter;


