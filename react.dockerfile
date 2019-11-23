FROM node:10.17.0-alpine3.10

COPY . /var/www

WORKDIR /var/www

RUN apk update
RUN apk add yarn
RUN yarn install

CMD [ "bin/bash" ] 