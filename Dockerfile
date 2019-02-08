# base image
FROM node:9.6.1

# set working directory
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

COPY . /app

RUN npm install

# start app
CMD ["npm", "start"]

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
