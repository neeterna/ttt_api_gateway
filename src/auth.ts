import {
  ServerUnaryCall,
  sendUnaryData,
} from '@grpc/grpc-js';

import { IAuthServer } from "./proto/auth_service_grpc_pb";
import {
  SignUpRequest,
  SignUpResponse,
  SignInRequest,
  SignInResponse,
  RefreshTokenRequest,
  RefreshTokenResponse
} from "./proto/auth_service_pb"


export const AuthServer: IAuthServer = {
  signUp(call: ServerUnaryCall<SignUpRequest, SignUpResponse>, callback: sendUnaryData<SignUpResponse>) {
    const response = new SignUpResponse();
    response.setMessage(`username: ${call.request.getUsername()}, pass: ${call.request.getPassword()}`)
    console.log("in signUp");
    callback(null, response);
  },

  signIn(call: ServerUnaryCall<SignInRequest, SignInResponse>, callback: sendUnaryData<SignInResponse>) {
    const response = new SignInResponse();
    response.setSessionToken("hello");
    console.log("in signIn");
    callback(null, response);
  },

  refreshToken(call: ServerUnaryCall<RefreshTokenRequest, RefreshTokenResponse>, callback: sendUnaryData<RefreshTokenResponse>) {
    const response = new RefreshTokenResponse();
    response.setAccessToken("help")
    console.log("in refreshToken");
    callback(null, response);
  },
}
