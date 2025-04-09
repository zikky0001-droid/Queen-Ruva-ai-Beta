FROM node:20-buster  # Changed from lts-buster to specific version for stability

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

# Remove EXPOSE (not needed for Render)
USER node

# Modified CMD for Render compatibility
CMD ["node", "index.js"]  # Removed --server flag
