  import bcrypt from 'bcryptjs';
  import { refresh_token_secret, access_token_secret} from '../config/config.js';
  import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { generateAccessToken, generateRefreshToken} from "../utils/generatetokens.js";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
};


 export const signup = async (req, res) => {
    try{
    const { name, username, email, password } = req.body;

    if (!username || !name || !email || !password) {
        return res.status(400).json({ message: "all fields are required" });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        return res.status(400).json({ message: "dusra email use karo bhai" });
    }
    const existUsername = await User.findOne({ username });
    if (existUsername) {
        return res.status(400).json({ message: "dusra username use karo bhai" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = new User({
          name,
          username, 
          email, 
          password : hashedPassword
         });

        await newUser.save();
       return res.status(201).json({ message: "user created successfully" });
    }catch(err){
        console.error("Error creating user:", err);
        res.status(500).json({ message: "error creating user", error: err.message });
    }
};




  //  ye login ke liye hai

 export const login = async (req,resp)=>{
     try{
      const {username,password}= req.body;
        if(!username ||!password){
            return resp.status(400).json({message:"all fields fill karna zaruri hai bhai"});
        }
        const user = await User.findOne({ username });
        if(!user){
            return resp.status(400).json({message:"user nahi mil raha"});
        }
        const mila = await bcrypt.compare(password, user.password);
        if(!mila){
            return resp.status(400).json({message:"password galat hai bhai"});
        }

          const userPayload = {
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name
    };
    const accessToken = generateAccessToken(userPayload);
    const refreshToken = generateRefreshToken(userPayload);
    user.refreshToken = refreshToken;
    await user.save();
     
    resp.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 10 * 60 * 1000 });
    resp.cookie("refreshToken", refreshToken, { ...cookieOptions, maxAge: 15 * 24 * 60 * 60 * 1000 });
            return resp.status(200).json({message:"aap enter kar gaye ho", user:userPayload});
     }
     catch(error){
       
        resp.status(500).json({ message: "login failed", error: error.message });
     }
  }



  export const refresh = async (req, resp) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return resp.status(401).json({
      message: "No refresh token"
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, refresh_token_secret);

    const user = await User.findById(decoded._id);

    if (!user || user.refreshToken !== refreshToken) {
      return resp.status(401).json({
        message: "Invalid refresh token"
      });
    }

    const accessToken = generateAccessToken({
      _id: user._id,
      username: user.username,
      email: user.email
    });

    resp.cookie("accessToken", accessToken, { ...cookieOptions, maxAge: 10 * 60 * 1000 });

    resp.status(200).json({
      message: "Access token refreshed"
    });

  } catch (error) {
    resp.status(401).json({
      message: "Invalid refresh token"
    });
  }
};


export const logout = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    res.status(200).json({
      message: "Logged out successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Logout failed"
    });
  }
};



export const me = async (req, res) => {

  try {

    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: "Server error"
    });
  }
};