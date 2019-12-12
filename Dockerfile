FROM node:12.13.1-alpine3.10

COPY . /var/www

WORKDIR /var/www

ENV REACT_APP_CONTENTFUL_API_KEY=B2uUjFaDZWaHsBFi6QimV1Q1QD7-xuwlWS0l12vhUQY
ENV REACT_APP_ACCESS_TOKEN=hCtmLS3BvKBX4jZVf559mhk2eaRQpVJFAXliFPsAc_M
ENV REACT_APP_PREVIEW_ACCESS_TOKEN=avXcCOgunLvkZgMi6iWW56khJ6aF854tqTRzSRmgHQ8
ENV REACT_APP_SPACE_ID=jkarnbztf3v4

RUN apk update
RUN apk add yarn
RUN yarn install
RUN yarn global add serve
RUN npm run-script build

ENTRYPOINT [ "serve", "-s", "build" ] 