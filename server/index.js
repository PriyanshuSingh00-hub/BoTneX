import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/connectDb.js"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";

dotenv.config()


const app = express()


app.use(express.json())
app.use(cookieParser())




app.get("/" , (req,res)=>{
    res.json("Hello from Server")
})

app.use("/api/auth" , authRouter)
const  PORT = process.env.PORT || 8000

app.listen(PORT , ()=>{
    console.log(`Server Started on Port ${PORT}`)
    connectDB()
})