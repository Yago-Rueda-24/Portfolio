# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Argumentos de construcción para ajustar el base path de Vite en producción
ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

# Copiar manifiestos e instalar dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM nginx:1.27-alpine AS production

# Copiar configuración de Nginx optimizada para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar artefactos estáticos generados en la etapa previa
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
