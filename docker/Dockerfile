FROM node:21 AS build-stage

COPY . /code

WORKDIR /code

RUN npm install

CMD ["npm", "run", "start"]