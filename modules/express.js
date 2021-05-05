const path = require('path');
const express = require('express');
const pretty = require('express-prettify');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { nodeEnv } = require('../../../../src/modules/config');
const routes = require('../../../../src/routes/index.js');
const middlewares = require('../../../../src/controller/middlewares');

const app = express(); 
app.use(cors());
if (nodeEnv !== 'test') app.use(logger('dev'));
app.use(bodyParser.json()); // -> app.use(express.json()); ?
app.use(pretty({ query: 'pretty' }));

// Serve the static files from the React app
app.use('/static', express.static(path.join(process.cwd(), 'report')));

//set routes paths (different with modules)
app.use('/api', routes());

// load error mdlw at the end
app.use(middlewares.notFound());
app.use(middlewares.handleError());

module.exports = app;
