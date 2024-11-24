import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  createUser: {type: String},
  createuserCountry: {type: String},
  createdAt: { type: Date, required: true, default: Date.now },
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});


const Image = mongoose.model("Image", imageSchema);

export default Image;


