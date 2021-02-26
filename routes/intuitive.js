// index.js hold the routing logic

const express = require('express');
const {
   RestrictedController, DomainsController, WebController, AccountController
} = require('../controller');


module.exports = () => {
  const router = express.Router();

    router
    .post('/domains/charts', DomainsController.getCharts);

  router
  .post('/web', WebController.getWebCharts)
  .post('/web/events', WebController.getEventsCount)
  .post('/web/distinct_ips', WebController.getDistinctIPs)
  .post('/web/security_geo_events', WebController.getGeoip)
  .post('/web/by_country', WebController.getEventsByCountryLimit)
  .post('/web/top_user_agents', WebController.getTopUserAgents)

  router
    .post('/restricted/table', RestrictedController.getTable)
    .post('/restricted/home', RestrictedController.getCharts)
    .post('/restricted/calls', RestrictedController.getCalls)

    router
    .post('/account/charts', AccountController.getCharts)

  return router;
};
