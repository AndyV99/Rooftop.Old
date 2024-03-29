import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend ({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map (function () {
  this.route ('auth', function () {
    this.route ('sign-in');
    this.route ('sign-up');
  });
  this.route ('dashboard', { path: '/' }, function () {
    this.route ('home');
  });
});

export default Router;
