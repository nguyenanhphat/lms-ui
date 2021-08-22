#!/bin/bash

NETWORK_NAME=lms-network
APP_NAME=lms-ui-docs

docker run -it -d --name ${APP_NAME} \
  --network lms-network \
  -e VIRTUAL_HOST="docs.learnhub.com.vn" \
  -e LETSENCRYPT_HOST="docs.learnhub.com.vn" \
  -e LETSENCRYPT_EMAIL="nghiepuit@gmail.com" \
  -p 9999:9999 \
  ${APP_NAME}