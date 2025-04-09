FROM node:lts-buster

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Create session dir with correct permissions
RUN mkdir -p /app/session && \
    chown node:node /app/session

WORKDIR /app

COPY package*.json ./

RUN npm install --production && \
    npm install qrcode-terminal

# Copy ONLY the creds.json file
COPY session/creds.json ./session/

# Copy remaining files (except session/ to avoid overwrites)
COPY . .

# Final permission fix
RUN chown -R node:node /app/session

EXPOSE 3000
USER node
CMD ["node", "index.js", "--server"]
