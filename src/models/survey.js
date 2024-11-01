import mongoose from "mongoose"

const surveySchema = new mongoose.Schema({
    name: String,
    emailAdress: String,
    phoneNumber: String,
    Suggestions: String,
    date: Date 

})

const Survey = mongoose.model("survey", surveySchema)
export default Survey
