#!/bin/bash
readonly DIST="./dist/proto"
readonly SRC="./src/proto"

mkdir ${DIST}
mkdir ${SRC}

npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${DIST} \
    --grpc_out=grpc_js:${DIST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${SRC} \
    -I ./proto \
    proto/*.proto
