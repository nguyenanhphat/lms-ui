#!/bin/bash

APP_NAME=lms-ui-docs

docker run -d --rm --name ${APP_NAME} \
  --network lms-network \
  -e VIRTUAL_HOST="docs.learnhub.com.vn" \
  -e LETSENCRYPT_HOST="docs.learnhub.com.vn" \
  -e LETSENCRYPT_EMAIL="nghiepuit@gmail.com" \
  -p 8082:8082 \
  ${APP_NAME}

