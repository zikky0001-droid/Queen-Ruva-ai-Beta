# Use Node.js LTS version
FROM node:18-alpine

# Create app directory and set as working directory
WORKDIR /usr/src/app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install --production

# Copy all source files
COPY . .

# Create session directory if it doesn't exist
RUN mkdir -p ./session

# Environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Run as non-root user for security
RUN chown -R node:node /usr/src/app
USER node

# Health check (optional)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "index.js"]
