FROM node:lts-buster

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production && \
    npm install qrcode-terminal

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Set the user to node for better security
USER node

# Command to run the application
CMD ["node", "index.js", "--server"]
