FROM node:10-stretch
LABEL maintainer="asjas@outlook.com"

RUN adduser --no-create-home --disabled-password www

# Install debian packages
RUN apt-get update -y && apt-get install -qq \
  lsb \
  lsb-release \
  distro-info-data \
  sudo \
  default-jre \
  libhiredis0.13 \
  libpython2.7 \
  libyajl2 \
  git \
  wget \
  apt-transport-https \
  nginx \
  supervisor

# Supervisord
RUN mkdir -p /var/log/supervisor
RUN mkdir -p /etc/supervisor/conf.d/
COPY docker/supervisord.conf /etc/supervisord.conf

# Nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /data/nginx/cache

# Cloudflared Argo Tunnel
WORKDIR /etc/cloudflared
RUN wget -O- -q https://bin.equinox.io/c/VdrWdbjqyF/cloudflared-stable-linux-amd64.tgz | tar xz
COPY docker/cert.pem /etc/cloudflared
COPY docker/config.yaml /etc/cloudflared
RUN /etc/cloudflared/cloudflared install

# Clone website from github
WORKDIR /www
RUN git clone --quiet https://github.com/Asjas/Personal-Webpage . && \
  yarn && \
  yarn run build

# Nginx Amplify
WORKDIR /opt/amplify
RUN wget -q https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
RUN API_KEY='bf0e4b6f9b095598bcc9cfb207c3147e' sh ./install.sh

# Stackdriver Agents
WORKDIR /opt/stackdriver
RUN wget -q https://dl.google.com/cloudagents/install-monitoring-agent.sh
RUN sudo bash install-monitoring-agent.sh

WORKDIR /

# Main
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
