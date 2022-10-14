import mongoose, { ConnectOptions } from "mongoose";

const mySecret = process.env['MONGODB_URL']

mongoose.connect(`${mySecret}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
} as ConnectOptions, (error) => {
	if (error) throw error;
	console.log("Mongodb connecting...");
})

