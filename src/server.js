require('dotenv').config();
    // Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
});

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Declare a route
fastify.get('/', async (request, reply) => {
  return { staus: 'OK' }
});
        
const port = process.env.PORT || 3000;

// Run the server!
const start = async () => {
  try {
    await fastify.listen(port);
    fastify.swagger();
    fastify.log.info(`Server listening on ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();

    