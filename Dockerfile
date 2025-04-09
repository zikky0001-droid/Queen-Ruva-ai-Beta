FROM node:lts-buster

# Install dependencies with robust error handling
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

RUN npm install --production && \
    npm install qrcode-terminal

# Copy application files
COPY . .

EXPOSE 3000

CMD ["node", "index.js", "--server"]
