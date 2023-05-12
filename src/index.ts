import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AuthService } from "./proto/services/auth/v1/auth_service_grpc_pb";
import { AuthServer } from "./auth";


const server = new Server();

server.addService(AuthService, AuthServer);

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});
