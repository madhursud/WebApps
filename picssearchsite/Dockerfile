FROM node:latest

WORKDIR /picssearchsite/

COPY public/ /picssearchsite/public
COPY src/ /picssearchsite/src
COPY package.json /picssearchsite/

RUN npm install

CMD ["npm", "start"]