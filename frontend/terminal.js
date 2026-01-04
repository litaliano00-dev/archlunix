const term = new Terminal({
  cursorBlink: true,
  fontSize: 14,
  theme: { background: "#000000" }
});

term.open(document.getElementById("terminal"));
term.write("Connecting to Arch Linux...\r\n");

const socket = new WebSocket(`ws://${location.host}`);

socket.onmessage = (event) => {
  term.write(event.data);
};

term.onData((data) => {
  socket.send(data);
});

socket.onopen = () => {
  term.write("\r\nConnected.\r\n");
};

socket.onclose = () => {
  term.write("\r\nDisconnected.\r\n");
};
