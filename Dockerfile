FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

ENV PORT=8080

ENV URL_EVENT_BUS=event-bus-srv:4040

EXPOSE 8080

ENTRYPOINT [ "node","index.js" ]
