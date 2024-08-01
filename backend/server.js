// Import Dependency
import express from "express";
import dotenv from "dotenv";


import authRouter from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectToMongoDb.js";

// Configure

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use("/api/auth",authRouter)






app.listen(PORT,()=>{
    connectMongoDB();
    console.log('running');
})