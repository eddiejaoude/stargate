
FROM node:15
LABEL org.opencontainers.image.source https://github.com/eddiejaoude/stargate

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV HUSKY=0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["npm", "start"]
