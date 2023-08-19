# Use the official Nginx base image from Docker Hub
FROM nginx:latest

# Copy your custom configuration file to the Nginx configuration directory
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default Nginx port (80) to allow incoming HTTP traffic
EXPOSE 80

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]