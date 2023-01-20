import { MongoClient } from "mongodb";

// your mongodb connection string
const MONGODB_URI = process.env.MONGODB_URI;
// set the connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("please provide a mongoDB connection URI");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, connectionOptions);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI, connectionOptions);
  clientPromise = client.connect();
}

export default clientPromise;
