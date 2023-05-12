// package: services.auth.v1
// file: services/auth/v1/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_auth_v1_auth_service_pb from "../../../services/auth/v1/auth_service_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IAuthService_ISignUp;
    signIn: IAuthService_ISignIn;
    refreshToken: IAuthService_IRefreshToken;
}

interface IAuthService_ISignUp extends grpc.MethodDefinition<services_auth_v1_auth_service_pb.SignUpRequest, services_auth_v1_auth_service_pb.SignUpResponse> {
    path: "/services.auth.v1.Auth/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_auth_v1_auth_service_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<services_auth_v1_auth_service_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.SignUpResponse>;
}
interface IAuthService_ISignIn extends grpc.MethodDefinition<services_auth_v1_auth_service_pb.SignInRequest, services_auth_v1_auth_service_pb.SignInResponse> {
    path: "/services.auth.v1.Auth/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_auth_v1_auth_service_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.SignInRequest>;
    responseSerialize: grpc.serialize<services_auth_v1_auth_service_pb.SignInResponse>;
    responseDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.SignInResponse>;
}
interface IAuthService_IRefreshToken extends grpc.MethodDefinition<services_auth_v1_auth_service_pb.RefreshTokenRequest, services_auth_v1_auth_service_pb.RefreshTokenResponse> {
    path: "/services.auth.v1.Auth/RefreshToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_auth_v1_auth_service_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<services_auth_v1_auth_service_pb.RefreshTokenResponse>;
    responseDeserialize: grpc.deserialize<services_auth_v1_auth_service_pb.RefreshTokenResponse>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
    signUp: grpc.handleUnaryCall<services_auth_v1_auth_service_pb.SignUpRequest, services_auth_v1_auth_service_pb.SignUpResponse>;
    signIn: grpc.handleUnaryCall<services_auth_v1_auth_service_pb.SignInRequest, services_auth_v1_auth_service_pb.SignInResponse>;
    refreshToken: grpc.handleUnaryCall<services_auth_v1_auth_service_pb.RefreshTokenRequest, services_auth_v1_auth_service_pb.RefreshTokenResponse>;
}

export interface IAuthClient {
    signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signIn(request: services_auth_v1_auth_service_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: services_auth_v1_auth_service_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    signIn(request: services_auth_v1_auth_service_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: services_auth_v1_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: services_auth_v1_auth_service_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: services_auth_v1_auth_service_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public signIn(request: services_auth_v1_auth_service_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.SignInResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
    public refreshToken(request: services_auth_v1_auth_service_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_auth_v1_auth_service_pb.RefreshTokenResponse) => void): grpc.ClientUnaryCall;
}
