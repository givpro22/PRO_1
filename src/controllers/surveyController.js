import {CoffeeSurvey, FoodSurvey, BarSurvey, CarShareSurvey} from "../models/Survey";

export const postCoffee = async (req, res) => {
const {name,email,phone,feedback} = req.body


try {
await CoffeeSurvey.create({
    name:name,
    emailAdress: email,
    phoneNumber: phone,
    Suggestions: feedback,
    date: Date.now()
})
    return res.redirect('/carshare');
}
catch(error){
    return res.render("coffee"); }
}

export const postFood = async (req, res) => {
    const {name,email,phone,feedback} = req.body
    
    
    try {
    await FoodSurvey.create({
        name:name,
        emailAdress: email,
        phoneNumber: phone,
        Suggestions: feedback,
        date: Date.now()
    })
        return res.redirect('/');
    }
    catch(error){
        return res.render("coffee"); }
    }


export const postBar = async (req, res) => {
    const {name,email,phone,feedback} = req.body
    
    
    try {
    await BarSurvey.create({
        name:name,
        emailAdress: email,
        phoneNumber: phone,
        Suggestions: feedback,
        date: Date.now()
    })
        return res.redirect('/');
    }
    catch(error){
        return res.render("coffee"); }
    }
    
export const postCarShare = async (req, res) => {
    const {name,email,phone,feedback} = req.body
    
    
    try {
    await CarShareSurvey.create({
        name:name,
        emailAdress: email,
        phoneNumber: phone,
        Suggestions: feedback,
        date: Date.now()
    })
        return res.redirect('/');
    }
    catch(error){
        return res.render("coffee"); }
    }


export const Report = async(req,res) => {
    const CoffeeReport = await CoffeeSurvey.find({})
    const FoodReport = await FoodSurvey.find({})
    const BarReport = await BarSurvey.find({})
    const CarShareReport = await CarShareSurvey.find({})

    return res.render("survey",{CoffeeReport, FoodReport, BarReport, CarShareReport})
  }


  export const Random = (req,res) => {

    return res.render("random")
  }
  