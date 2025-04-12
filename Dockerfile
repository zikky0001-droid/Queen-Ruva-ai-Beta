FROM node:lts

# Install dependencies with proper cleanup
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    imagemagick \
    webp \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install production dependencies only
RUN npm install --production \
    && npm cache clean --force

# Copy application code
COPY . .

# Create session/database dirs with correct permissions
RUN mkdir -p /app/session /app/database \
    && chown -R node:node /app/session /app/database

# Run as non-root user for security
USER node

# Volume declarations (must match your code)
VOLUME ["/app/session", "/app/database"]

# Environment variables
ENV NODE_ENV=production \
    SESSION_PATH=/app/session

# Directly run your start script (no auto-restart)
CMD ["npm", "start"]
