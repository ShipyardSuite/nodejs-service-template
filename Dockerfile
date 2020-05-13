FROM bitnami/node

LABEL maintainer="shipyardsuite@gmail.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG SERVICE_NAME_ARG=${SERVICE_NAME}
ARG SERVICE_PORT_ARG=${SERVICE_PORT}
ARG HEALTHCHECK_ID_ARG=${HC_ID}

ENV SERVICE_NAME=$SERVICE_NAME_ARG
ENV SERVICE_PORT=$SERVICE_PORT_ARG
ENV HC_ID=$HEALTHCHECK_ID_ARG

COPY package.json /usr/src/app/

RUN npm install --production

COPY . /usr/src/app/

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

HEALTHCHECK --interval=20s --timeout=10s --start-period=10s --retries=3 CMD curl --fail https://hc-ping.com/${HC_ID} || exit 1