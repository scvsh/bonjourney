FROM node:latest
MAINTAINER scvsh

# Create app directory
WORKDIR /HUD

# Copy current
ADD . /HUD


RUN npm install -g truffle
RUN npm install -g ethereumjs-testrpc
RUN npm install
#RUN truffle unbox react
#RUN truffle compile
#RUN truffle migrate
EXPOSE 3000
EXPOSE 8545


#RUN npm run start
#CMD ["npm", "start"]
