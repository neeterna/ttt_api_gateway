"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const auth_service_grpc_pb_1 = require("./proto/services/auth/v1/auth_service_grpc_pb");
const auth_1 = require("./auth");
const server = new grpc_js_1.Server();
server.addService(auth_service_grpc_pb_1.AuthService, auth_1.AuthServer);
server.bindAsync("0.0.0.0:4000", grpc_js_1.ServerCredentials.createInsecure(), (err) => {
    if (err)
        console.log(err);
    server.start();
});
