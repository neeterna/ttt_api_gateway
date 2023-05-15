import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AuthService } from "./proto/auth_service_grpc_pb";
import { AuthServer } from "./auth";


const server = new Server();

server.addService(AuthService, AuthServer);

const port = 9090;
const uri = `0.0.0.0:${port}`;
console.log(`Listening on ${uri}`);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err) => {
  if (err) console.log(err);
  server.start();
});
