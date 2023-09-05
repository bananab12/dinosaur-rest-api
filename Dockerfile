# Usamos la imagen oficial de Deno como base
FROM denoland/deno:alpine-1.36.3

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo
COPY . /app

# Instala las dependencias de Deno
RUN deno cache deno.json

# ENV MONGODB_URI=mongodb://localhost:27017/deno
ENV MONGODB_URI=mongodb://127.0.0.1:27017/deno

# Exponer el puerto en el que se ejecuta la aplicación Deno
EXPOSE 3000

# Ejecuta tu aplicación Deno con la conexión a MongoDB
CMD ["deno", "run", "-A", "main.ts"]

