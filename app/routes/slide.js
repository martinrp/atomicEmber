import Ember from 'ember';

var SlideRoute = Ember.Route.extend({
	model: function(params) {
		console.log(this.controllerFor('application'));
		this.controllerFor('application').set('currentID', params.slide_id);
		return this.store.find('slide', params.slide_id);
		// console.log('SLIDE', this.store.find('slide', 1));
	}
});

export default SlideRoute;