import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

export const buildSpec = () =>
  swaggerJsdoc({
    definition: {
      openapi: '3.0.3',
      info: {
        title: 'Univers Barça API',
        version: '1.0.0',
        description: "API REST de l'application mobile et du back-office Univers Barça.",
      },
      servers: [{ url: '/api/v1' }],
      components: {
        securitySchemes: {
          bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        },
        schemas: {
          RegisterInput: {
            type: 'object',
            required: ['email', 'password', 'displayName', 'consents'],
            properties: {
              email: { type: 'string', format: 'email' },
              password: { type: 'string', minLength: 8 },
              displayName: { type: 'string', minLength: 3, maxLength: 20 },
              locale: { type: 'string', enum: ['fr', 'en', 'es'] },
              consents: {
                type: 'object',
                required: ['terms', 'privacy'],
                properties: {
                  terms: { type: 'boolean' },
                  privacy: { type: 'boolean' },
                  notifications: { type: 'boolean' },
                  geolocation: { type: 'boolean' },
                  analytics: { type: 'boolean' },
                },
              },
            },
          },
        },
      },
    },
    apis: [path.join(__dirname, '../routes/*.{ts,js}')],
  });
