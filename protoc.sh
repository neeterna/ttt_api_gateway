#!/bin/bash
readonly PROTO_DIR="./src/proto"

# auth_service
readonly AUTH_PATH="./proto/services/auth/v1/auth_service.proto"

npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    ${AUTH_PATH} 

npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${PROTO_DIR} \
    -I ./proto \
    ${AUTH_PATH}
