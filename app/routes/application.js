import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		goto: function(dir){
			// console.log('GOTO', dir, this.controllerFor('application').get('currentID'));
			var nextSlide = parseInt(this.controllerFor('application').get('currentID')) + dir;
			if (nextSlide < 1) { nextSlide = 1; }
			if (nextSlide > 24) { nextSlide = 24; }
			this.transitionTo('slide', nextSlide);
		}
	}
});
