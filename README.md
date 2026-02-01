# ArchLunix

Web-based Arch Linux terminal emulator with AUR, sudo, and command support. Works in browser or real terminal via Docker.

## Project Structure

archlunix/
├─ backend/
│  ├─ server.js
│  ├─ package.json
│  └─ arch-container/
│      ├─ Dockerfile
│      └─ init.sh
├─ frontend/
│  ├─ index.html
│  ├─ terminal.js
│  └─ style.css

## Requirements

- Docker & Docker Desktop (WSL integration for Windows)
- Node.js v18+
- Git

## Installation

### Clone

git clone https://github.com/litaliano00-dev/archlunix
cd archlunix

### Backend / Browser

cd backend
npm install
cd arch-container
docker build -t archlunix .
cd ..
node server.js

Open browser at http://localhost:3000

### Terminal / Docker

cd backend/arch-container
docker build -t archlunix .
docker run -it --rm archlunix

## Platform Notes

- Windows: enable Docker Desktop WSL integration
- macOS / Linux: install Docker and Node.js
- iOS / Android: browser version only (android and ios not avaible rn. still working on it)

## Author

litaliano00-dev, Only Privacy Focused Tech Stuff (OPFTS)

## License

MIT

## ⚠️⚠️ATTENTION⚠️⚠️
Disclaimer: This project is an independent, community-driven tool and is not affiliated with, endorsed by, or an official product of the Arch Linux project. Arch Linux is a trademark of Judd Vinet and Aaron Griffin.
