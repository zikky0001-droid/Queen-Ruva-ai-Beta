FROM node:lts-buster

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Create and set permissions for session directory
RUN mkdir -p /app/session && \
    chown node:node /app/session

WORKDIR /app

COPY package*.json ./

RUN npm install --production && \
    npm install qrcode-terminal

# Copy session file (if it exists in your project)
COPY session/o\ reds.json ./session/

# Copy the rest of the app
COPY . .

# Ensure permissions
RUN chown -R node:node /app/session

EXPOSE 3000

USER node

CMD ["node", "index.js", "--server"]
