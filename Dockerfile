FROM node:24.8-alpine

WORKDIR /personal

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run dev

EXPOSE 3000

ENV HOSTNAME="0.0.0.0"