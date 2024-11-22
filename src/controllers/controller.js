import User from "../models/User";
import Image from "../models/Image";

import bcrypt from "bcrypt";


export const home = (req, res) => {
    return res.render("index");
  };
  
export const coffee = (req, res) => {
return res.render("coffee");
};

export const Food = (req, res) => {
return res.render("Food");
};

export const Bar = (req, res) => {
return res.render("Bar");
};



export const getEdit = (req,res) => {
  return res.render("edit-profile")
}


export const CarShare = async (req, res) => {
  const images = await Image.find({}).sort({ createdAt: "desc" });
  return res.render("CarShare", {images});
  };


export const postUpload = async (req, res) => {
  const { file } = req;
  try {
    await Image.create({
      fileUrl:file ? file.location : avatarUrl,
      createUser:req.session.user.username
    });
    return res.redirect("/carshare");
  } catch (error) {
    console.log(error);
    return res.status(400).render("CarShare");
  }
};


export const postEdit = async(req,res) => {
  const {
    session: {
      user: { _id, avatarUrl },
    },
    body: { name, email, username, location },
    file,   //file이 없을 수도 있기때문에
  } = req;
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    
    {
      avatarUrl: file ? file.location : avatarUrl,
      name,
      email,
      username,
      location,
    },
    { new: true }
  );
  req.session.user = updatedUser;
  return res.redirect("/edit");
};

export const getjoin = (req, res) => {
  return res.render("join",{ errorMessage: null });
};
export const postjoin = async (req, res) => {
  const { name, email, username, password, password2, location } = req.body;

  // 각각 중복 여부 확인
  const usernameExists = await User.exists({ username });
  const emailExists = await User.exists({ email });
  if (password !== password2) {
    return res.status(400).render("join", { errorMessage: "비번이 다름." });

  }


  if (usernameExists && emailExists) {
    return res.status(400).render("join", { errorMessage: "이미 있는 아이디와 이메일입니다." });
  }
  
  if (usernameExists) {
    return res.status(400).render("join", { errorMessage: "이미 있는 아이디입니다." });
  }

  if (emailExists) {
    return res.status(400).render("join", { errorMessage: "이미 있는 이메일입니다." });
  }
  try{
  await User.create({
    email,
    username,
    password,
    name,
    location
  });
  return res.redirect("/");}
  catch(error){
    return res.status(400).render("join",
      {errorMessage: error._message,

      }
    )
  }
};

export const getlogin = (req, res) => {
  return res.render("login",{ errorMessage: null });
};

export const postlogin = async (req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username})
  if (!user){
    return res.status(400).render("login", { errorMessage: "Username not found." });
  }

  const ok = await bcrypt.compare(password, user.password)
  if(!ok) {
    return res.status(400).render("login", { errorMessage: "Incorrect password." });
  }
  req.session.loggedIn = true
  req.session.user= user
  console.log("로그인 완료!!")
  return res.redirect("/");
};


