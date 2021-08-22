FROM node:14 as node-build
ARG ENV_FILE=.env.example
WORKDIR /app
COPY ./package.json yarn.lock ./
RUN yarn install

COPY ./ ./
COPY ./$ENV_FILE ./.env
RUN yarn docs:build

FROM node-build as publish

FROM node:14.0.0-alpine3.11 as final
WORKDIR /app

COPY --from=publish /app/ /app/
RUN ls

CMD ["yarn", "start"]
