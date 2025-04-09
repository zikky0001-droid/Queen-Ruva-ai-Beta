FROM node:lts-buster-slim

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp \
    git \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm install -g qrcode-terminal pm2

# Bundle app source
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the app port
EXPOSE 3000

# Run the application
CMD ["pm2-runtime", "start", "index.js"]
