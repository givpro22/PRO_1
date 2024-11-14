import mongoose from "mongoose"

const surveySchema = new mongoose.Schema({
    name: String,
    emailAdress: String,
    phoneNumber: String,
    Suggestions: String,
    date: { type: Date, default: Date.now }

})

export const CoffeeSurvey = mongoose.model("coffeesurvey", surveySchema)
export const FoodSurvey = mongoose.model("FoodSurvey", surveySchema)
export const BarSurvey = mongoose.model("BarSurvey", surveySchema)
export const CarShareSurvey = mongoose.model("CarShareSurvey", surveySchema)