import express from "express";
import { WebSocketServer } from "ws";
import pty from "node-pty";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../frontend")));

const server = app.listen(PORT, () => {
  console.log(`🌐 Web terminal running at http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("🟢 Client connected");

  const shell = pty.spawn("docker", [
    "run",
    "--rm",
    "-i",
    "--hostname=archlinux",
    "archlunix"
  ], {
    name: "xterm-256color",
    cols: 80,
    rows: 24,
    env: process.env
  });

  shell.on("data", data => ws.send(data));
  ws.on("message", msg => shell.write(msg));

  ws.on("close", () => shell.kill());
});
