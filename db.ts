import mongoose from "npm:mongoose@^6.7";

// Obtiene la URL de conexión a MongoDB desde una variable de entorno
const MONGODB_URI = Deno.env.get("MONGODB_URI");

if (!MONGODB_URI) {
  console.error("La variable de entorno MONGODB_URI no está configurada.");
  Deno.exit(1); // Sale del programa con un código de error
}

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log(`La base de datos está conectada: ${db.connection.name}`);
} catch (error) {
  console.error(error);
}
