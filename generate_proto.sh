#!/bin/bash

readonly PROTO_DIR="./src/proto"

# auth_service
protoc -I=./proto ./proto/services/auth/v1/auth_service.proto \
  --js_out=import_style=commonjs:${PROTO_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:${PROTO_DIR}
