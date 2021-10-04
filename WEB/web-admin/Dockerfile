FROM node:14.18.0

WORKDIR /WEB
COPY package.json /WEB/package.json
ENV PATH /WEB/node_modules/.bin:$PATH

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]