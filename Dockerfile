FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
ENV NODE_ENV production

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY --from=builder /app/scripts/nginx/default.conf /etc/nginx/conf.d
# COPY --from=builder /app/scripts/nginx/api_conf.d /etc/nginx/conf.d/api_conf.d
# Containers run nginx with global directives and daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
