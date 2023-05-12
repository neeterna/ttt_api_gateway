"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServer = void 0;
const auth_service_pb_1 = require("./proto/services/auth/v1/auth_service_pb");
exports.AuthServer = {
    signUp(call, callback) {
        const response = new auth_service_pb_1.SignUpResponse();
        response.setMessage(`username: ${call.request.getUsername()}, pass: ${call.request.getPassword()}`);
        console.log("in signUp");
        callback(null, response);
    },
    signIn(call, callback) {
        const response = new auth_service_pb_1.SignInResponse();
        response.setSessionToken("hello");
        console.log("in signIn");
        callback(null, response);
    },
    refreshToken(call, callback) {
        const response = new auth_service_pb_1.RefreshTokenResponse();
        response.setAccessToken("help");
        console.log("in refreshToken");
        callback(null, response);
    },
};
