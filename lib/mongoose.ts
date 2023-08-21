import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
	mongoose.set('strictQuery', false);

	if (!process.env.MONGO_URI) {
		throw new Error("Missing MONGO_URI environment variable");
	}
	if (isConnected) {
		return console.log('=> using existing database connection');
	}

	try {
		await mongoose.connect(process.env.MONGO_URI)
		isConnected = true;
		console.log('=> using new database connection');

	} catch (error) {
		console.log('error connecting to database: ', error)
	}
}