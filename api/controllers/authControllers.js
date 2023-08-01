import User from "../modals/User.js"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res, next) => {
 try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt) 

  const newUser = new User ({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  await newUser.save()
  res.status(200).send("user has been created")

 }catch(err){
    next(err)
 }

}

export const loginController = async (req, res, next, err) => {
  try{
    const loggedUser = User.findOne({username: req.body.username})
    if (!loggedUser) return next(createError(404, "user not found!")) 
    const isPasswordCorrect = await bcrypt.compare(req.body.password, loggedUser.password)
    if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))

    //so if the username and password we send a jwt token
    const token = jwt.sign({id:loggedUser._id, isAdmin: loggedUser.isAdmin }, process.env.jwtAccessToken )

    //destructuring the user
    const { password, isAdmin, ...otherDetails } = loggedUser.doc
    //we add to the token to the cookie
    res.cookie("access_token", token, {
      httpOnly: true,
    })

    res.status(200).json({...otherDetails})
  }catch(err){
    next(err)
  }
}