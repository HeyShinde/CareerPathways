import mongoose from "mongoose";

// Ensure MONGODB_URI is defined and is a string
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cachedConnection: mongoose.Mongoose | null = null;
let cachedPromise: Promise<mongoose.Mongoose> | null = null;

async function connectToDatabase(): Promise<mongoose.Mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      cachedConnection = mongooseInstance;
      return mongooseInstance;
    });
  }

  return cachedPromise;
}

export default connectToDatabase;
