import express, { Request, Response } from "npm:express@^4.17";

import Dinosaur from "./schema.ts";
import "./db.ts";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Dinosaur API!");
});

app.get("/api/dinosaur", async (_req: Request, res: Response) => {
  const dinos = await Dinosaur.find();
  return res.json(dinos);
});

app.get("/api/:dinosaur/dinosaur", async (req: Request, res: Response) => {
  const dinos = await Dinosaur.findById(req.params.id);
  if (!dinos) return res.status(404).json({ message: "Dino not found" });
  return res.json(dinos);
});

app.post("/api/dinosaur", async (req: Request, res: Response) => {
  const { name, species } = req.body;

  // Crea un nuevo objeto Dinosaur utilizando los datos del cuerpo de la solicitud
  const newDino = new Dinosaur({
    name,
    species,
  });

  // Guarda el nuevo dinosaurio en la base de datos
  try {
    const insertedDino = await newDino.save();
    return res.status(201).json(insertedDino);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while creating the dinosaur." });
  }
});

app.put("/api/:dinosaur/dinosaur", async (req: Request, res: Response) => {
  const dinoUpdate = await Dinosaur.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(dinoUpdate);
});

app.delete("/api/:dinosaur/dinosaur", async (req: Request, res: Response) => {
  const dinos = await Dinosaur.findByIdAndDelete(req.params.id);
  res.json(dinos);
});

app.listen(3000, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
