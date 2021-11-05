FROM node:12-alpine

WORKDIR /work

COPY ./index.js /work/index.js
COPY ./index.html /work/index.html

CMD node index.js