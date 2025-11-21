# **ArgentBank**, application bancaire

**ArgentBank** est une application bancaire qui permet aux utilisateurs de se connecter, de consulter leurs comptes, de modifier leurs informations personnelles (_username_), et qui à terme, permettra de modifier les informations de transaction liées à ces mêmes comptes.  
Le projet est basé sur **React**, avec **redux** pour gérer le _state_ local.

## Table des matières

- [Les technologies](#les-technologies)
  - [Côté Backend](#côté-backend)
  - [Côté Frontend](#côté-frontend)
- [Les prérequis](#les-prérequis)
- [Guide d'utilisation](#guide-d'utilisation)
  - [1.Le Backend](#1le-backend)
  - [2.Le Frontend](#2le-frontend)
- [Les fonctionnalités](#les-fonctionnalités)
- [Les plus](#les-plus)
  - [Les regex](#les-regex)
  - [Green Code](#green-code)
  - [Redux Best Practices](#redux-best-practices)
- [Pour aller plus loin](#pour-aller-plus-loin)

## Les technologies

### Côté backend

- Ancienne version de Node (voir [les prérequis](#les-prérequis))
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

### Côté frontend

- React 19
- Vite (bundler)
- React Router (navigation)
- Redux/toolkit (gestion du state)

## Les prérequis

- Node Version Manager (pour changer de version à la volée)
- [Node.js v12.22.12](https://nodejs.org/en/)
- Node.js v22.17.0 (frontend)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

## Guide d'utilisation

### 1. Le backend

Première installation :
```bash
cd Argentbank-Backend
# suppose l'installation de NVM et de la version concernée
nvm use ...
# installe les dépendances
npm install
# démarre le serveur sur le port correspondant (3001)
npm run dev:server
# peuple la base de données avec les deux profils (Tony et Steve)
npm run populate-db
```

Pré développement frontend :
```bash
cd Argentbank-Backend
nvm use 12.22.12
npm run dev:server
```

### 2. Le frontend

Première installation :
```bash
cd Argentbank-Frontend
# installation de react+vite, react-redux, reduxjs/toolkit, nvm, etc...
npm install ...
# changement de version Node
nvm use ...
# lance le développement en temps réel sur le port correspondant (5173)
npm run dev
```

Post lancement du backend :
```bash
cd Argentbank-Frontend
nvm use 22.17.0
npm run dev
```

## Les fonctionalités

- Connexion/déconnexion des utilisateurs
- Authentification des utilisateurs (_token_)
- L'UI s'adapte si connecté (_nav_)
- Application entièrement _responsive_ (en cours)

## Les plus

### Les regex

L'ajout de regex (optionnel) semblait être une addition intéressante :
- _civilianNameRegex_ pour contrôler les _noms_ et _prénoms_ (nouvel utilisateur)
- _userNameRegex_ pour contrôler le changement de _username_ (tous les utilisateurs)
- _mailRegex_ pour contrôler les _emails_ renseignés (nouvel utilisateur)
- _passwordRegex_ pour contrôler les _mots de passe_ renseignés (nouvel utilisateur)

### Green Code

- Images et assets optimisés
- Utilisation de redux pour le cache local
- Lazy loading des composants

### Redux Best Practices

- Requêtes API centralisées
- Utilisation de slices
- Gestion d'état optimisée

## Pour aller plus loin

L'application pourrait avoir besoin d'un composant **Register.jsx** afin de permettre à de nouveaux utilisateurs de créer un compte sur l'application. Afin de limiter cette possibilité aux seuls possésseurs de comptes chez **ArgentBank**, on pourrait imaginer un formulaire classique (nom, prénom, email, mot de passe, etc) auquel on rajouterait un _champ "registerKey"_. Ce dernier servant à renseigner un code à usage unique (par exemple xxxx-xxxx-xxxx) envoyé directement à l'utilisateur afin de lui permettre de s'enregistrer.  
Dans cette perspective, une _regex_ supplémentaire serait nécessaire pour contrôler le code en question. Il faudrait aussi l'inclure dans la base de données pour permettre l'enregistrement lors de la requête, dans un soucis de sécurité supplémentaire.