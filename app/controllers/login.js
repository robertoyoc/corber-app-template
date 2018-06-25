import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
	  send(){
	  	this.transitionToRoute('inicio');
	  }
	}
});
