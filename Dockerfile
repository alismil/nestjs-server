FROM node:lts-alpine

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

CMD [ "node", "dist/main.js" ]

# ENV NODE_ENV production
# TODO: in the future discuss multistep builds
# Explain cache
# Explain .dockerignore
