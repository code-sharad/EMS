
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production
COPY .  .
EXPOSE 5200
CMD ["node", "index.js"]