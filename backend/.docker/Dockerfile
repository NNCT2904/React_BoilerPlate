FROM node:14.17-buster-slim
WORKDIR /src

# Install Node modules
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --non-interactive

COPY . .

CMD ["yarn" , "start"]