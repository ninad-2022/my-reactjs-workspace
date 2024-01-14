# Layer 1: use nodejs version above 21.5.0
FROM node:21.5.0

# Layer 2: COPY i/p-filename o/p-filename  
# COPY package.json package.json 
# COPY package-lock.json package-lock.json
# COPY  app.js app.js
# to avoid copying every file we use COPY . . and make .dockerignore to avoid node_modules/

WORKDIR /app 
# it will put all below layers into /app
COPY package.json package.json 
COPY package-lock.json package-lock.json

# COPY . ./
  
# Layer 3: run below command
RUN npm install
COPY  app.js app.js

# Layer 4: entrypoint of the running app
ENTRYPOINT ["node", "app.js"]