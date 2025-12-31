FROM archlinux:latest

ENV USER=unix
ENV HOME=/home/unix

RUN pacman -Sy --noconfirm \
    sudo base-devel git nano neovim openssh go

RUN useradd -m unix && \
    echo "unix:root" | chpasswd && \
    echo "root:root" | chpasswd && \
    echo "unix ALL=(ALL) ALL" >> /etc/sudoers

COPY init.sh /init.sh
RUN chmod +x /init.sh

USER unix
WORKDIR /home/unix

CMD ["/init.sh"]
