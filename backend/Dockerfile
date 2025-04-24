FROM node:18-alpine3.18

# Install dependencies needed for sharp and Strapi build
RUN apk update && apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  nasm \
  bash \
  vips-dev \
  git

# Set environment
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy package files
COPY package.json package-lock.json ./

# Install global dependencies and project dependencies using npm
RUN npm install -g node-gyp
RUN npm install --legacy-peer-deps

# Add node_modules binaries to PATH
ENV PATH /opt/node_modules/.bin:$PATH

# Copy the application code
WORKDIR /opt/app
COPY . .

# Set ownership and permissions
RUN chown -R node:node /opt/app

# Switch to non-root user
USER node

# Build Strapi admin panel
RUN ["npm", "run", "build"]

# Expose Strapi port
EXPOSE 1337

# Start Strapi in development mode (change to `start` for production)
CMD ["npm", "run", "develop"]
