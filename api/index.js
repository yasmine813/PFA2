import  express from "express";
import  dotenv from    "dotenv";
import  mongoose from "mongoose";
import  authRoute from "./routes/authentification.js"
import  usersRoute from "./routes/users.js"
import  trailsRoute from "./routes/trails.js"
import { error } from "console";
import cookieParser from "cookie-parser";
const app=express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoBD")
    } catch (error) {
       throw error;
      }
};

mongoose.connection.on("diconnected", () => {
    console.log("mongoBD disconnected")
})

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/trails",trailsRoute);

app.use((error,req,res,next) => {
    const errorStatus= error.status || 500;
    const errorMessage= error.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success : false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack,
    })
})

app.listen(8800, ()=>{
    connect()
    console.log("connected to backend !")
});