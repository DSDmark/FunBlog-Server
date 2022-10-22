import mongoose, { Document } from "mongoose";

// THERE IS NEED TO CAREATE A FILE FOR INTERFACES .

export interface IUser extends Document {
	name: string;
	account: string;
	password: string;
	avatar: string;
	role: string;
	type: string;
	token: string;
	_doc: object;
}

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Add your name"],
		trim: true,
		maxLength: [20, "Your name is too long"]
	},
	account: {
		type: String,
		required: [true, "Enter your email"],
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: [true, "Enter your password"],

	},
	avatar: {
		type: String,
		default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
	},
	role: {
		type: String,
		default: "normal"
	},
	type: {
		type: String,
		default: "register"
	},
	token: { type: String, select: false }
}, { timestamps: true });

export default mongoose.model<IUser>("user", userSchema);