#! /bin/bash

function cleanup {
    docker-compose down
}

trap cleanup EXIT
docker-compose up -d

U_ID=$(id -u)
G_ID=$(id -g)
PWD=$(pwd)

docker run -u ${U_ID}:${G_ID} \
    -v ${PWD}/reports:/zap/wrk:rw \
    --rm \
    --network ttadp \
    -t owasp/zap2docker-stable zap-baseline.py -t http://backend:3001 -r zap.html