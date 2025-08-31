import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  // Contact endpoint (simplified for deployment)
  app.post("/api/contact", (req, res) => {
    console.log("Contact form submitted:", req.body);
    res.json({ 
      success: true, 
      message: "お問い合わせを受け付けました" 
    });
  });

  // Menu endpoints (simplified)
  app.get("/api/menu/updates", (req, res) => {
    res.json({ data: {} });
  });

  app.get("/api/announcements/active", (req, res) => {
    res.json([{
      id: 1,
      title: "StarCurry Website",
      content: "Vercel deployment successful"
    }]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
