FROM node:14.17-buster-slim as base
WORKDIR /src

FROM base as dev
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --non-interactive

COPY . .

EXPOSE 8080

CMD ["yarn" , "start"]


# BUILD FOR PRODUCTION

FROM dev as production_build
RUN yarn build

FROM dev as production_dependency
RUN yarn install --production --non-interactive

FROM base as production

ENV NODE_ENV="production"

COPY package.json yarn.lock ./
COPY --from=production_build /src/build ./build
COPY --from=production_dependency /src/node_modules ./node_modules

CMD ["node", "/src/build/index.js"]
