FROM  node:22.12-bookworm-slim 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD ["npm", "start"]

