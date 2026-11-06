import { defineService } from "@prisma/composer";

export default defineService({
  name: "moa-backend",
  build: {
    // Prisma Composer construye tu app con Bun
    command: "bun build src/main.ts --target bun --outfile dist/main.js",
  },
  // El entrypoint es el archivo compilado por Bun
  entrypoint: "dist/main.js",
});