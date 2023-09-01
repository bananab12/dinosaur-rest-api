import { model, Schema } from "npm:mongoose@^6.7";

// Define schema.
const dinosaurSchema = new Schema({
  name: { type: String, unique: true },
  species: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Validations
dinosaurSchema.path("name").required(true, "Dinosaur name cannot be blank.");
dinosaurSchema
  .path("species")
  .required(true, "Dinosaur species cannot be blank.");

// Export model.
export default model("Dinosaur", dinosaurSchema);
