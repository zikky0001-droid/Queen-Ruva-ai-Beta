FROM node:lts-buster

# Install system dependencies in a single RUN layer
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/* && \
    mkdir -p /app/session && \
    chown node:node /app/session

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies - use npm install if package-lock.json doesn't exist
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi && \
    npm install qrcode-terminal

# Copy app files with correct permissions
COPY --chown=node:node . .

EXPOSE 3000
USER node
CMD ["node", "index.js", "--server"]
