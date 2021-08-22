#!/bin/bash

NETWORK_NAME=lms-network
APP_NAME=lms-ui-docs

docker build --network ${NETWORK_NAME} -t ${APP_NAME} .