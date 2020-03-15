import { Server } from "hapi";

module.exports = {
  name: 'home',
  version: '1.0.0',
  register: async function(server: Server) {
    server.route({
      method: 'GET',
      path: '/',
      handler: function () {
        return 'hello world';
      }
    })
  }
}