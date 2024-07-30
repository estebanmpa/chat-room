FROM node:lts-alpine
WORKDIR /app
COPY ./web-chat-server-users/package*.json ./
RUN npm install
RUN npm audit fix; exit 0
COPY ./web-chat-server-users/* .
RUN npm run build --prod
ENV NODE_ENV production
EXPOSE 9000