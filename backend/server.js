import express from "express";
import { WebSocketServer } from "ws";
import pty from "node-pty";

const app = express();
const PORT = 3000;

app.use(express.static("../frontend"));

const server = app.listen(PORT, () => {
  console.log(🌐 Web terminal running at http://localhost:${PORT});
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("🟢 Client connected");

  const shell = pty.spawn("docker", [
    "run",
    "--rm",
    "-it",
    "--hostname=archlinux",
    "archlunix"
  ], {
    name: "xterm-256color",
    cols: 80,
    rows: 24
  });

  shell.on("data", (data) => {
    ws.send(data);
  });

  ws.on("message", (msg) => {
    shell.write(msg);
  });

  ws.on("close", () => {
    console.log("🔴 Client disconnected");
    shell.kill();
  });
});
