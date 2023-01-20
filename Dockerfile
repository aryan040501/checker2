FROM node:17-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

RUN npm install

CMD ["npm","start"]