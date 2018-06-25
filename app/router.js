import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('registro');
  this.route('notificaciones');
  this.route('soluciones');
  this.route('crear_plantillas');





  this.route('logged', { path: '/' }, function() {
  this.route('principal');

    this.route('inicio');
  });
});

export default Router;
