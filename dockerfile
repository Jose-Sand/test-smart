FROM node:12
WORKDIR /usr/src
ADD . /usr/src
RUN npm install
EXPOSE 4000