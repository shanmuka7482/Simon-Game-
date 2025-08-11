# Use Nginx as base image
FROM nginx:alpine

# Copy your static site files into Nginx HTML folder
COPY . /usr/share/nginx/html/simon-game/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the website
EXPOSE 80


