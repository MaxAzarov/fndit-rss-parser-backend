# Stage 1: Build
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]