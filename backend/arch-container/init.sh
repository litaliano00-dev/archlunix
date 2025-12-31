#!/bin/bash

set -e

if [ ! -d "/home/unix/yay" ]; then
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si --noconfirm
  cd ..
  rm -rf yay
fi

exec /bin/bash
