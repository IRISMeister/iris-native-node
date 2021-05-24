FROM containers.intersystems.com/intersystems/iris-community:2021.1.0.205.0 as IRIS
FROM node:14.17.0
RUN apt-get update

WORKDIR /usr/projects
COPY --from=IRIS /usr/irissys/dev/nodejs/ /tmp
COPY intersystems-iris-native/index.js /tmp/intersystems-iris-native/

RUN npm init -y && \
    npm install --save /tmp/intersystems-iris-native