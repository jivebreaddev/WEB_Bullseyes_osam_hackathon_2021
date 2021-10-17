FROM node:14.18.0

WORKDIR /WEB
COPY package.json /WEB/package.json
ENV PATH /WEB/node_modules/.bin:$PATH


RUN npm install

ENV Django_APP_HOST_IP_ADDRESS https://osamhack2021-ai-web-bullseyes-bullseyes-q74x46j562xxgg-8000.githubpreview.dev
EXPOSE 3000
CMD ["npm", "start"]