import { Request, Response } from "npm:express@^4.17";

import Dinosaur from "./dino.model.ts";

export const getDinos = async (_req: Request, res: Response) => {
  const dinos = await Dinosaur.find();
  return res.json(dinos);
};

export const getDino = async (req: Request, res: Response) => {
  const dinos = await Dinosaur.findById(req.params.id);
  if (!dinos) return res.status(404).json({ message: "Dino not found" });
  return res.json(dinos);
};

export const createDino = async (req: Request, res: Response) => {
  const { name, description } = req.body;

  // Crea un nuevo objeto Dinosaur utilizando los datos del cuerpo de la solicitud
  const newDino = new Dinosaur({
    name,
    description,
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
};

export const updateDino = async (req: Request, res: Response) => {
  const dinoUpdate = await Dinosaur.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(dinoUpdate);
};

export const deleteDino = async (req: Request, res: Response) => {
  const dinos = await Dinosaur.findByIdAndDelete(req.params.id);
  res.json(dinos);
};
