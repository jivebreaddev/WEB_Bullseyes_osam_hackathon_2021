FROM node:14.18

WORKDIR /WEB
COPY package.json /WEB

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]