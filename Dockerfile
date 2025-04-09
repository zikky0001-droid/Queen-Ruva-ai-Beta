FROM node:lts-buster

# Install dependencies in a single RUN layer
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

# Install dependencies (using npm ci for reproducible builds)
COPY package*.json ./
RUN npm ci && npm install qrcode-terminal

# Copy app files (use .dockerignore to exclude session/)
COPY --chown=node:node . .

EXPOSE 3000
USER node
CMD ["node", "index.js", "--server"]
