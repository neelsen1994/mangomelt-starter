# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package files first for caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies (cached)
RUN pnpm install

# Copy the rest of the app
COPY . .

# Expose React default port
EXPOSE 3000

# Default command (can be overridden by docker-compose)
CMD ["pnpm", "dev"]
