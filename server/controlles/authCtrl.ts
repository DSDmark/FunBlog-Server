import { Request, Response } from "express"
import User from "../models/useModels"
import bcrypt from "bcrypt";
const authCtrl = {
	register: async (req: Request, res: Response) => {
		try {
			const { name, email, password } = req.body;

			// const newEmail = await User.findOne({ email });

			// console.log(newEmail)
			// if (newEmail) return res.status(400).json({ msg: "This email is already persented" });

			if (password.length < 6) return res.status(400).json({ msg: "you password is too short" });

			const hashPassword = await bcrypt.hash(password, 12);

			res.json({ msg: "registered" })
		} catch (error: any) {
			res.status(500).json({ msg: error })

		}
	}
}

export default authCtrl;