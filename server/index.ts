import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import router from "./routes";


// MIDDLEWARE
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

const PORT = process.env.PORT || 8000;


//ROUTES
app.use("/apis", router);

//DATABASE
import "./config/database"

app.listen(PORT, () => {
	console.log(`Server Running on ${PORT}`);
})