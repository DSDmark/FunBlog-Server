import { Request, Response, NextFunction } from "express";

export const registationValidation = async (req: Request, res: Response, next: NextFunction) => {
	const { name, email, password } = req.body;

	const error = [];

	// NAME VALIDATION
	if (!name) {
		error.push("Enter Your Name");
	} else if (name.length > 20) {
		error.push("Name Should be up 20 Charator");
	}

	// EMAIL VALIDATION
	if (!email) {
		error.push("Entar your mail");
	} else if (!validateEmail(email) && !validPhone(email)) {
		error.push("Email or Phone number format is incorret");
	}

	// PASSWORD VALIDATION
	if (password.length < 6) {
		error.push("Password Must be upto 6 charator");
	}

	if (error.length > 0) return res.status(400).json({ msg: error });
}

export function validateEmail(email: string) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validPhone(phone: string) {
	const re = /^[+]/g
	return re.test(phone)
}