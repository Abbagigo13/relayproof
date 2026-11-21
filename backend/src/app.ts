import Fastify from "fastify";
import cors from "@fastify/cors";
import { env } from "./config/env.js";

export async function buildApp() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: env.FRONTEND_URL,
  });

  app.get("/api/health", async () => {
    return {
      success: true,
      service: "RelayProof API",
      status: "operational",
      timestamp: new Date().toISOString(),
    };
  });

  return app;
}
