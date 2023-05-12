// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_auth_v1_auth_service_pb = require('../../../services/auth/v1/auth_service_pb.js');

function serialize_services_auth_v1_RefreshTokenRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type services.auth.v1.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_RefreshTokenRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_v1_RefreshTokenResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.RefreshTokenResponse)) {
    throw new Error('Expected argument of type services.auth.v1.RefreshTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_RefreshTokenResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.RefreshTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_v1_SignInRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.SignInRequest)) {
    throw new Error('Expected argument of type services.auth.v1.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_SignInRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_v1_SignInResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.SignInResponse)) {
    throw new Error('Expected argument of type services.auth.v1.SignInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_SignInResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.SignInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_v1_SignUpRequest(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.SignUpRequest)) {
    throw new Error('Expected argument of type services.auth.v1.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_SignUpRequest(buffer_arg) {
  return services_auth_v1_auth_service_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_v1_SignUpResponse(arg) {
  if (!(arg instanceof services_auth_v1_auth_service_pb.SignUpResponse)) {
    throw new Error('Expected argument of type services.auth.v1.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_v1_SignUpResponse(buffer_arg) {
  return services_auth_v1_auth_service_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  signUp: {
    path: '/services.auth.v1.Auth/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.SignUpRequest,
    responseType: services_auth_v1_auth_service_pb.SignUpResponse,
    requestSerialize: serialize_services_auth_v1_SignUpRequest,
    requestDeserialize: deserialize_services_auth_v1_SignUpRequest,
    responseSerialize: serialize_services_auth_v1_SignUpResponse,
    responseDeserialize: deserialize_services_auth_v1_SignUpResponse,
  },
  signIn: {
    path: '/services.auth.v1.Auth/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.SignInRequest,
    responseType: services_auth_v1_auth_service_pb.SignInResponse,
    requestSerialize: serialize_services_auth_v1_SignInRequest,
    requestDeserialize: deserialize_services_auth_v1_SignInRequest,
    responseSerialize: serialize_services_auth_v1_SignInResponse,
    responseDeserialize: deserialize_services_auth_v1_SignInResponse,
  },
  refreshToken: {
    path: '/services.auth.v1.Auth/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: services_auth_v1_auth_service_pb.RefreshTokenRequest,
    responseType: services_auth_v1_auth_service_pb.RefreshTokenResponse,
    requestSerialize: serialize_services_auth_v1_RefreshTokenRequest,
    requestDeserialize: deserialize_services_auth_v1_RefreshTokenRequest,
    responseSerialize: serialize_services_auth_v1_RefreshTokenResponse,
    responseDeserialize: deserialize_services_auth_v1_RefreshTokenResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
