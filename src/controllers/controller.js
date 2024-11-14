import User from "../models/User";
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

export const CarShare = (req, res) => {
return res.render("CarShare");
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