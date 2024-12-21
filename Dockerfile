# Usa una imagen ligera de NGINX
FROM nginx:stable-alpine

# Copia los archivos estáticos al directorio que NGINX sirve
COPY storybook-static /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
