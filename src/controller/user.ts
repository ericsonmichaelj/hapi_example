import container  from "../inversify.config";
import TYPES, { UserService } from '../constants/types';

var userService = container.get<UserService>(TYPES.UserService);

module.exports = {
  name: 'user',
  version: '1.0.0',
  register: async function(server, options) {
    server.route({
      method: 'DELETE',
      path: '/user/{id}',
      handler: (request) => {
        return userService.deleteUser(request.params.id)
      }
    });
    server.route({
      method: 'GET',
      path: '/user/{id}',
      handler: (request) => {
        return userService.getUser(request.params.id)
      }
    });
    server.route({
      method: 'GET',
      path: '/user',
      handler: (request) => {
        return userService.getUsers()
      }
    });
    server.route({
      method: 'PUT',
      path: '/user/{id}',
      handler: (request) => {
        return userService.updateUser(request.params.id, request.payload)
      }
    });
    server.route({
      method: 'POST',
      path: '/user',
      handler: (request) => {
        return userService.newUser(request.payload)
      }
    });  
  }
}