# Use Node.js LTS version
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install required system dependencies
RUN apk add --no-cache \
    build-base \
    python3 \
    && npm install

# Bundle app source
COPY . .

# Install additional dependencies if needed
RUN npm install pino @hapi/boom express chalk file-type path axios awesome-phonenumber node-cache libphonenumber-js @whiskeysockets/baileys

# Create necessary directories
RUN mkdir -p ./session ./database ./welcome

# Expose the port the app runs on
EXPOSE 3000

# Run the bot
CMD [ "node", "index.js" ]
