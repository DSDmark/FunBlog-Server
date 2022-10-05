import mongoose, { ConnectOptions } from "mongoose";

// const URI = process.env["MONGODB_URL"];
const mySecret = process.env['MONGODB_URL']


mongoose.connect(`${mySecret}`, {
useNewUrlParser: true, 
useUnifiedTopology: true 
} as ConnectOptions, (error) => {
	if (error) throw error;
	console.log("Mongodb connecting...");
})