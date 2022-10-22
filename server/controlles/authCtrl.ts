import { Request, Response } from "express"
import User, { IUser } from "../models/useModels"
import bcrypt from "bcrypt";
import { activeToken } from "../config/token";
import { validateEmail, validPhone } from "../middleware/validation";
import sendEmail from "../config/sendMail";
import { sendSms } from "../config/sendSms";
import jwt from "jsonwebtoken"


interface IDecodedToken {
	id?: string;
	newUser: INewUser;
	iat: number;
	exp: number;
}

interface INewUser {
	name: string;
	account: string;
	password: string;
}


const authCtrl = {
	register: async (req: Request, res: Response) => {
		try {
			const { name, account, password } = req.body;
			const newEmail = await User.findOne({ account });
			if (newEmail) return res.status(400).json({ msg: "This email is already persented" });

			if (password.length < 6) return res.status(400).json({ msg: "you password is too short" });

			const hashPassword = await bcrypt.hash(password, 12);

			const newUser = {
				name, account, password: hashPassword
			}

			const token = activeToken({ newUser });
			const url = `${process.env['BASE_URL']}/active/${token}`;

			if (validateEmail(account)) {
				sendEmail(account, `${url}`, name, "You need to Verify");
				res.json({ msg: "you are verifiy....." });
			} else if (validPhone(account)) {
				sendSms(account, `${url}`, "You need to verification...");
				res.json({ msg: "go and verify yourself" });
			}

		} catch (error: any) {
			res.status(500).json({ msg: error })

		}
	},
	activeAccount: async (req: Request, res: Response) => {
		try {
			const { active } = req.body
			const key = process.env["ACTIVE_TOKEN"];
			const decoded = <IDecodedToken>jwt.verify(active, `${key}`)
			console.log(decoded)
			const { newUser } = decoded;
			if (!newUser) return res.status(500).json({ msg: "Invalid auth." })
			const new_user = new User(newUser);
			await new_user.save();
			res.json({ msg: "you account active now" })
		} catch (error) {
			return res.status(500).json({ msg: error });
		}
	},
	login: async (req: Request, res: Response) => {
		try {
			const { account, password } = req.body;
			const user = await User.findOne(account);
			console.log(user)
			if (!user || !password) return res.status(400).json({ msg: "you need to register first" });

			//IF USER DATA EXISTS
			loginUser(user, password, res);


		} catch (error) {
			res.status(500).json({ msg: [error, "hey"] });
		}
	}
}

const loginUser = async (user: IUser, password: string, res: Response) => {
	const isMatch = await bcrypt.compare(password, user.password);
	if (isMatch) {
		let error = user.type === "register" ? "incorrect" : `this account with ${user.type}`
		res.status(500).json({ msg: error })
	}
	res.status(200).json({ msg: "login successfull" })
}




export default authCtrl;

