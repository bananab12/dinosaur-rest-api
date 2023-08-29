import express from "npm:express@^4.17";

import dinoRoutes from "./dinosaurs/dino.routes.ts";
import "./db.ts";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(dinoRoutes);

app.listen(3000, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});
