FROM debian

RUN apt-get update -y

RUN apt-get install telnetd systemctl -y

RUN echo 'root:root' | chpasswd

RUN systemctl start inetd

EXPOSE 23

CMD ["/usr/sbin/inetd", "-d"]
