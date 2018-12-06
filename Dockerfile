FROM node:10-alpine

WORKDIR /twsms-util
COPY ./package.json ./server.js ./

CMD ["npm", "start"]
