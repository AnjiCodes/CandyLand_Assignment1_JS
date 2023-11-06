const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://anjalimahida25:assignment1@cluster0.ruzejlj.mongodb.net/";

let db;
let productsCollection;

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    db = client.db("Products");
    productsCollection = db.collection("products");
    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Failed to connect to the MongoDB database:", error);
  }
}

function getDB() {
  return db;
}

function getProductsCollection() {
  return productsCollection;
}

module.exports = { connectDB, getDB, getProductsCollection };