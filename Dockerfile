FROM node:lts-buster

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

# Install dependencies (remove --production if needed)
COPY package*.json ./
RUN npm install && npm install qrcode-terminal

# Copy app files (use .dockerignore to exclude session/)
COPY . .

# Ensure correct permissions
RUN chown -R node:node /app

EXPOSE 3000
USER node
CMD ["node", "index.js", "--server"]
