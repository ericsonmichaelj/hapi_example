import { Server } from 'hapi';

const init = async () => {
  const server = new Server({
    port: 3000,
    host: 'localhost'
  })
  await server.register([require('./controller/home'), require('./controller/user') ])
  await server.start();
  console.log('server started at localhost:3000')
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

init();


