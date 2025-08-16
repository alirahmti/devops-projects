# Step 1: Build the React application using Node.js
FROM docker.arvancloud.ir/node:16 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./
# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the React application
RUN npm run build

# Step 2: Serve the built application with Nginx
FROM docker.arvancloud.ir/nginx:alpine

# Copy the build output from the builder stage to Nginx's serving folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]
