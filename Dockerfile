# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with a static server
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Environment variable for API URL
ENV API_URL=${API_URL}

EXPOSE 4005

CMD ["nginx", "-g", "daemon off;"]