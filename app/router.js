import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('principal');
  this.route('crear_plantillas');
  this.route('notificaciones');
  this.route('login');
  this.route('registro');
  this.route('inicio');
  this.route('soluciones');
});

export default Router;
