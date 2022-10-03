import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send({ msg: "Hey dude..." })
})

app.listen(PORT, () => {
	console.log(`Server Running on ${PORT}`);
})