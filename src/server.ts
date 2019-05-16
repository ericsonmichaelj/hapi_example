const Hapi = require('hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })
  await server.start();
  console.log('server started at localhost:3000')
  await server.register([require('./controller/home'), require('./controller/user') ])
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init();


