# Étape 1 : image de base
FROM node:18

# Étape 2 : définir le dossier de travail dans le conteneur
WORKDIR /app

# Étape 3 : copier les fichiers nécessaires
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du code
COPY . .

# Étape 6 : exposer le port
EXPOSE 5000

# Étape 7 : lancer l'application
CMD ["node", "server.js"]