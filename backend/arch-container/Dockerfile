FROM archlinux:latest

ENV USER=unix
ENV HOME=/home/unix

RUN pacman -Sy --noconfirm \
    sudo base-devel git nano neovim openssh go

RUN useradd -m unix && \
    echo "unix ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    echo "root:root" | chpasswd

COPY init.sh /init.sh
RUN chmod +x /init.sh

USER unix
WORKDIR /home/unix

CMD ["/init.sh"]
