# Stage 1: Build
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package configuration
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source
COPY . .

# Generate Prisma client (si cela n'est pas ajouter, le conteneur ne trouvera pas le client Prisma)
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS production

# Set environment to production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /app

# Copy necessary files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/prisma/generated ./prisma/generated

# Install only production dependencies
RUN npm install --only=production

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/src/main"]
