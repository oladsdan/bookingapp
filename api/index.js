import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { authRequest, hotelsRoutes, roomsRoutes, usersRoutes } from "./routes";
import authRequest from "./routes/auth.js"
import hotelsRoutes from "./routes/hotels.js"
import roomsRoutes from "./routes/rooms.js"
import usersRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
// initializing the express app
const app = express()
dotenv.config()

//connections of mongo
const connect = async () => {
    try {
        await mongoose.connect(process.env.mongodbConnections);
        console.log("mongodB connection was successful")
    } catch (error) {
        throw error;
    }

}
//middleware
app.use(cookieParser)
app.use(express.json())

//so we define our routes 
app.use("/api/auth", authRequest)
app.use("/api/users", usersRoutes)
app.use("/api/hotels", hotelsRoutes)
app.use("/api/rooms", roomsRoutes)



app.listen(8800, ()=> {
    connect()
    console.log("connected to backend")
})