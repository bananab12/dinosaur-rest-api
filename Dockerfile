FROM denoland/deno:alpine-1.36.3

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["deno", "run", "--allow-net", "main.ts"]
