import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
		let hola = prompt()
		if(hola!=1){
			return this.transitionTo('login')
		}
	}
});
