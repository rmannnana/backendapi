# =========================
# Stage 1 — Build
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Copier uniquement les fichiers nécessaires aux deps
COPY package*.json ./

# Installer toutes les dépendances (dev incluses)
RUN npm install

# Copier le reste du projet
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Build NestJS
RUN npm run build


# =========================
# Stage 2 — Production
# =========================
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copier uniquement ce qui est nécessaire
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 3000

# Lancer l'application NestJS
CMD ["node", "dist/src/main.js"]