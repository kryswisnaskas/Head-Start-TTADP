#!/bin/bash

# This script runs pa11y-ci against the frontend. See
# https://github.com/pa11y/pa11y-ci for more info. This script expects to be
# called from the yarnfile at the root of the project

function cleanup {
    docker-compose down
}

trap cleanup EXIT
docker-compose up -d

U_ID=$(id -u)
G_ID=$(id -g)
PWD=$(pwd)

docker build -t pa11y ./scripts/.

docker run -u $U_ID:$G_ID \
  --rm \
  --network ttadp \
  pa11y pa11y-ci -c pa11y.json http://frontend:3000