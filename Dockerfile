FROM node:20-buster

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp \
        git && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install && \
    npm install qrcode-terminal

# Copy app files
COPY . .

# Set up session directory
RUN mkdir -p /app/session && \
    chown -R node:node /app

# Environment configuration
ENV NODE_ENV=production \
    DISABLE_READLINE=true \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Run as non-root user
USER node

# Start command
CMD ["node", "index.js"]
