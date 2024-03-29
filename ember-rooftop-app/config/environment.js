'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-rooftop-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    gatekeeper: {
      baseUrl: 'http://localhost:5000/gatekeeper',
      startRoute: 'home',
      signInRoute: 'auth.sign-in',
      tokenOptions: {
        client_id: '5cd378b01fd1e1088286c80d',
        client_secret: 'ember'
      }
    }
  };

  if (environment === 'development') {
     //ENV.APP.LOG_RESOLVER = true;
     //ENV.APP.LOG_ACTIVE_GENERATION = true;
     // ENV.APP.LOG_TRANSITIONS = true;
     //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     //ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.api = {
      baseUrl: 'http://localhost:5000'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
