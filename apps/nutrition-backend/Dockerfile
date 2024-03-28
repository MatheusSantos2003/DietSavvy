# Use Node.js base image
FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 3003

# Command to run the application
CMD ["npm", "start"]
