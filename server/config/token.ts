import jwt from "jsonwebtoken";
import { Response } from "express";

const access_token = process.env["ACCESS_TOKEN"];
const active_token = process.env["ACTIVE_TOKEN"];
const rf_token = process.env["RF_TOKEN"];

export const accessToken = (payload: object) => {
	return jwt.sign(payload, `${access_token}`, { expiresIn: "15m" });

}

export const activeToken = (payload: object) => {
	return jwt.sign(payload, `${active_token}`, { expiresIn: "5m" });
}

export const rfToken = (payload: object, res: Response) => {
	const rf_Token = jwt.sign(payload, `${rf_token}`, { expiresIn: "30d" });

	res.cookie("rfToken", rf_Token, {
		httpOnly: true,
		path: "/apis/rftoken",
		maxAge: 30 * 24 * 60 * 60 * 100 // valid for 30 days.
	})
	return rf_Token;
}