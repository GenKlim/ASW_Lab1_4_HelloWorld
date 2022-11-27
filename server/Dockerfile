FROM node:18.12.1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install pg-promise
COPY . .
EXPOSE 3000
ENTRYPOINT ["node", "src/index.js"]