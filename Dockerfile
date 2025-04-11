# Use Node.js LTS version
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install system dependencies first (including Python for some npm packages)
RUN apk add --no-cache \
    build-base \
    python3 \
    make \
    g++

# Copy package files first for better caching
COPY package*.json ./

# Install npm dependencies
RUN npm install --production

# Bundle app source
COPY . .

# Create necessary directories
RUN mkdir -p ./session ./database ./welcome

# Expose the port the app runs on
EXPOSE 3000

# Run the bot
CMD [ "node", "index.js" ]
