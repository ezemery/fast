FROM node:12.13.1-alpine3.10 AS base
WORKDIR /var/www
COPY package.json /var/www
COPY yarn.lock /var/www

FROM base AS dependencies
WORKDIR /var/www
RUN apk update
RUN apk add yarn
RUN yarn install --production

FROM base AS release
WORKDIR /var/www
COPY --from=dependencies /var/www/node_modules ./node_modules
COPY . .
ENV REACT_APP_CONTENTFUL_API_KEY=B2uUjFaDZWaHsBFi6QimV1Q1QD7-xuwlWS0l12vhUQY
ENV REACT_APP_ACCESS_TOKEN=hCtmLS3BvKBX4jZVf559mhk2eaRQpVJFAXliFPsAc_M
ENV REACT_APP_PREVIEW_ACCESS_TOKEN=avXcCOgunLvkZgMi6iWW56khJ6aF854tqTRzSRmgHQ8
ENV REACT_APP_SPACE_ID=jkarnbztf3v4
RUN yarn build
ENTRYPOINT [ "yarn", "start" ] 
