FROM node:lts-buster

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create app directory structure with correct permissions
RUN mkdir -p /app/session && \
    chown node:node /app

WORKDIR /app

# Copy package files first for better caching
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install && \
    npm install qrcode-terminal

# Copy the rest of the application
COPY --chown=node:node . .

EXPOSE 3000
USER node
CMD ["node", "index.js", "--server"]
