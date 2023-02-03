FROM node:16-alpine

RUN apk update && apk add --no-cache docker-cli

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["sh", "_run_app.sh"]
