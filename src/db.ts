import mongoose from "npm:mongoose@^6.7";

try {
  const db = await mongoose.connect("mongodb://localhost:27017");
  console.log(`Database is connected: ${db.connection.name}`);
} catch (error) {
  console.log(error);
}
