# Usamos la imagen oficial de Deno como base
FROM denoland/deno:alpine-1.36.3

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo
COPY . /app

# Instala las dependencias de Deno (mod.ts)
RUN deno cache main.ts

# Instala Mongoose utilizando npm
RUN deno install -A --unstable -n mongoose npm:mongoose@^6.7

# Exponer el puerto en el que se ejecuta la aplicación Deno
EXPOSE 3000

# Ejecuta tu aplicación Deno con la conexión a MongoDB
CMD ["deno", "run", "--allow-net", "--allow-env", "--unstable", "--allow-read", "main.ts"]

