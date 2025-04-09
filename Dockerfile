FROM node:20-buster-slim

# Install essential dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        ffmpeg \
        imagemagick \
        webp \
        git \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Clone your repository (alternative to direct COPY)
RUN git clone https://github.com/iconic05/Queen-ruva-ai-beta /app
WORKDIR /app

# Install dependencies
RUN npm install && \
    npm install qrcode-terminal

# Environment configuration
ENV NODE_ENV=production \
    PORT=3000 \
    DISABLE_INTERACTIVE=true

# Create session directory
RUN mkdir -p /app/session && \
    chown -R node:node /app

# Switch to non-root user
USER node

# Health check
HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl -f http://localhost:$PORT/ || exit 1

# Start command
CMD ["node", "index.js"]
