exports.options = {
  routePrefix: '/apis/platform/v1/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    consumes: ['application/json'],
    produces: ['application/json']
  }
}