import mongoose from "mongoose"

const surveySchema = new mongoose.Schema({
    name: String,
    emailAdress: String,
    phoneNumber: String,
    Suggestions: String,
    date: { type: Date, default: Date.now }

})

const CoffeeSurvey = mongoose.model("coffeeSurvey", surveySchema)
export default CoffeeSurvey
