FROM node:20-buster

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Create app directory & set permissions
WORKDIR /app
RUN mkdir -p /app/session && chown node:node /app/session

# Install dependencies
COPY package*.json ./
RUN npm install && npm install qrcode-terminal

# Copy app files
COPY . .

# Ensure correct permissions
RUN chown -R node:node /app

USER node
CMD ["node", "index.js"]
