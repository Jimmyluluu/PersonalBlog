FROM node:16.18-slim

COPY . /vue-project

WORKDIR /vue-project

RUN yarn install

EXPOSE 5173

CMD ["yarn", "serve"]