# ArchLinux Web & Terminal Emulator

This project provides a full Arch Linux environment that can run either in your browser or directly in your terminal. It includes sudo, pacman, and AUR helpers. Works on Linux, MacOS, Windows, iOS, and Android.

# Project Structure

archlunix/
│
├─ backend/
│  ├─ arch-container/
│  │  ├─ Dockerfile
│  │  └─ init.sh
│  ├─ server.js
│  └─ package.json
│
└─ frontend/
   ├─ index.html
   ├─ terminal.js
   └─ style.css

# Installation & Usage

# 1️⃣ Clone the repository

# Install Git:

# Linux / MacOS:

# MacOS
brew install git
# Ubuntu/Debian
sudo apt install git

# Windows:
https://git-scm.com/download/win


# Clone:

git clone https://github.com/litaliano00-dev/archlunix.git
cd archlunix

# 2️⃣ Website Version

# Install Node.js:

# Linux / MacOS:

# MacOS
brew install node
# Ubuntu/Debian
sudo apt install nodejs npm

# Windows:
https://nodejs.org/en/download/


# Run:

cd backend
node server.js

# Open in browser:

http://localhost:3000

All commands (sudo, pacman, yay, whoami, ping, etc.) can be executed inside the terminal emulator.

# 3️⃣ Terminal (Docker) Version

# Install Docker: https://docs.docker.com/get-docker/

# Build and run:

cd backend/arch-container
docker build -t archlunix .
docker run -it archlunix

Inside the container, you can run all commands as root, including AUR helpers and sudo.

# Author

Made by litaliano00-dev and Only Privacy Focused Tech Stuff (OPFTS).
