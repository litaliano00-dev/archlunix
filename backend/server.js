import express from "express";
import { WebSocketServer } from "ws";
import pty from "node-pty";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve frontend HTML/CSS/JS
app.use(express.static(path.join(__dirname, "../frontend")));

const server = app.listen(PORT, () => {
  console.log(`🌐 Web terminal running at http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

// On client connection:
wss.on("connection", (ws) => {
  console.log("🟢 Client connected");

  // Spawn a real interactive bash session in Docker
  const shell = pty.spawn("docker", [
    "run",
    "--rm",
    "-i",                     // interactive input
    "-t",                     // allocate TTY
    "--hostname=archlinux",
    "archlunix",              // your image
    "/bin/bash",              // explicitly start bash
    "--login"                 // login shell so prompt loads
  ], {
    name: "xterm-256color",
    cols: 80,
    rows: 24,
    env: {                    // important: pass TERM & environment
      ...process.env,
      TERM: "xterm-256color"
    }
  });

  // Stream output from container → browser
  shell.on("data", (data) => {
    ws.send(data);
  });

  // Stream input from browser → container
  ws.on("message", (msg) => {
    shell.write(msg);
  });

  // Clean up on disconnect
  ws.on("close", () => {
    console.log("🔴 Client disconnected");
    shell.kill();
  });
});
