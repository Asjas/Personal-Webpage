FROM ubuntu:18.04

WORKDIR /app

RUN apt update -y && apt upgrade -y

RUN apt install git nginx nodejs npm -y
