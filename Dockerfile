# Etapa 1: Compilar la aplicación de React
FROM node:20-alpine3.20 AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Crear la build de la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación estática con nginx
FROM nginx:stable-alpine

# Copiar la build de la aplicación desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]