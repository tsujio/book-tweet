#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)

cd "$SCRIPT_DIR" && \
    npm run build && \
    rm -rf docs && \
    cp -r build docs

echo "Build succeeded."
