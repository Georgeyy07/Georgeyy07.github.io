FROM nginx:alpine

COPY . /usr/share/nginx/html

# just a label doesnt do anything, only for knowing port
EXPOSE 80 