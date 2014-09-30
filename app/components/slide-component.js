import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		goto: function(dir) {
			this.sendAction('goto', dir);
		},
	}
});
