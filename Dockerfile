FROM bitnami/node

LABEL maintainer="shipyardsuite@gmail.com"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG SERVICE_NAME_ARG=${SERVICE_NAME}
ARG SERVICE_PORT_ARG=${SERVICE_PORT}
ARG HEALTHCHECK_ID_ARG=${HEALTHCHECK_ID}

ENV SERVICE_NAME=$SERVICE_NAME_ARG
ENV SERVICE_PORT=$SERVICE_PORT_ARG
ENV HEALTHCHECK_ID=$HEALTHCHECK_ID_ARG
ENV NODE_ENV=${DOCKER_ENV}

COPY . /usr/src/app/
RUN npm install

ARG CACHEBUST=1
CMD [ "npm", "start" ]

HEALTHCHECK --interval=20s --timeout=10s --start-period=10s --retries=3 CMD curl --fail https://hc-ping.com/${HEALTHCHECK_ID} || exit 1