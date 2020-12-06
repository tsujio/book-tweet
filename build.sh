#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)

cd "$SCRIPT_DIR" && \
    npm run build && \
    find docs/* -maxdepth 0 | grep -v 'CNAME' | xargs rm -rf && \
    cp -r build/* docs && \
    echo "Build succeeded."
