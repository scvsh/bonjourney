FROM node:latest

# Create app directory
WORKDIR /HUD

# Copy current
ADD . /HUD


RUN npm install -g truffle
RUN npm install -g ethereumjs-testrpc
#RUN truffle unbox react

RUN truffle compile
RUN truffle migrate

EXPOSE 3000

CMD [ "npm", "start" ]

