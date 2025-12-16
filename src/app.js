const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const requestId = require('./middlewares/requestId');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const swaggerSpec = require('./docs/swagger');
const config = require('./config');

const app = express();

// ======================
// Global Middlewares
// ======================
app.use(requestId);          // middleware function ✔
app.use(logger());           // logger factory ✔
app.use(helmet());

app.use(
  cors({
    origin: config.corsOrigins?.length ? config.corsOrigins : true,
    credentials: true,
  })
);

app.use(express.json({ limit: '1mb' }));

// ======================
// Swagger (BEFORE routes)
// ======================
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ======================
// API Routes
// ======================
app.use('/api', routes);

// ======================
// Error Handling (LAST)
// ======================
app.use(notFound);
app.use(errorHandler);

module.exports = app;
