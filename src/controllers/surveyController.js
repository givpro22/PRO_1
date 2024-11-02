import CoffeeSurvey from "../models/CoffeeSurvey";

export const Report = async(req,res) => {
    const CoffeeReport = await CoffeeSurvey.find({})
    return res.render("survey",{CoffeeReport})
  }
  

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
    return res.redirect('/');
}
catch(error){
    return res.render("coffee"); }
}