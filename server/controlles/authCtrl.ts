import { Request, Response } from "express"
import User from "../models/useModels"
import bcrypt from "bcrypt";
import { activeToken } from "../config/token";
import { validateEmail } from "../middleware/validation";
import sendEmail from "../config/sendMail";

const authCtrl = {
	register: async (req: Request, res: Response) => {
		try {
			const { name, email, password } = req.body;

			const newEmail = await User.findOne({ email });

			if (newEmail) return res.status(400).json({ msg: "This email is already persented" });

			if (password.length < 6) return res.status(400).json({ msg: "you password is too short" });

			const hashPassword = await bcrypt.hash(password, 12);

			const newUser = {
				name, email, password: hashPassword
			}

			const token = activeToken({ newUser });
			const url = `${process.env['BASE_URL']}/active/${token}`;

			if (validateEmail(email)) {
				sendEmail(email, `${url}`, name, "You need to Verify");
				res.json({ msg: "you are verifiy....." });
			}

		} catch (error: any) {
			res.status(500).json({ msg: error })

		}
	}
}

export default authCtrl;