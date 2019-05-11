const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;
const cors = require ('cors');

function origin (origin, callback) {
  return callback (null, true);
};

const corsOptions = {
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
  origin
};

module.exports = Router.extend ({
  specification: {
    '/': { use: [cors (corsOptions)] },
    '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1'),
      '/v1': {
        policy: 'gatekeeper.auth.bearer'
      }
  }
});
