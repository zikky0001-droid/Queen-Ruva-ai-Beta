# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install system dependencies (git, python3, make, g++, ffmpeg, imagemagick)
RUN apk add --no-cache \
    git \
    python3 \
    make \
    g++ \
    ffmpeg \
    imagemagick

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
