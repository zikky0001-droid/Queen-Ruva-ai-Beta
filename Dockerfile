FROM node:lts-buster

# Install FFmpeg, ImageMagick, and WebP
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json ./

# Install dependencies (including qrcode-terminal)
RUN npm install && npm install -g qrcode-terminal

# Copy the rest of the files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the bot
CMD ["node", "index.js"]
