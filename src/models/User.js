import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String,  unique: true },
  avatarUrl: String,
  username: { type: String,  unique: true },
  password: { type: String},
  name: { type: String },
  location: { type: String},
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);

});

const User = mongoose.model("User_1", userSchema);
export default User;