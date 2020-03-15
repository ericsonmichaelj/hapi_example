import container  from "../inversify.config";
import TYPES, { UserService, IUser } from '../constants/types';
import { RequestOrig, Server } from "hapi";

var userService = container.get<UserService>(TYPES.UserService);

module.exports = {
  name: 'user',
  version: '1.0.0',
  register: async function(server: Server) {
    server.route({
      method: 'DELETE',
      path: '/user/{id}',
      handler: (request: RequestOrig) => {
        return userService.deleteUser(request.params["id"])
      }
    });
    server.route({
      method: 'GET',
      path: '/user/{id}',
      handler: (request: RequestOrig) => {
        return userService.getUser(request.params["id"])
      }
    });
    server.route({
      method: 'GET',
      path: '/user',
      handler: (request: RequestOrig) => {
        return userService.getUsers()
      }
    });
    server.route({
      method: 'PUT',
      path: '/user/{id}',
      handler: (request: RequestOrig) => {
        return userService.updateUser(request.params["id"], <IUser>request.payload)
      }
    });
    server.route({
      method: 'POST',
      path: '/user',
      handler: (request: RequestOrig) => {
        return userService.newUser(<IUser>request.payload)
      }
    });  
  }
}