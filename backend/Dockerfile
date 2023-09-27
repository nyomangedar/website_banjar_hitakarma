# Use the official Go image as the base image
FROM golang:1.20-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy the backend code to the container
COPY . .

# Build the Go application
RUN go build -o main .

# Start the Go backend server
EXPOSE 8000
CMD ["./main"]
