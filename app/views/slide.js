import Ember from 'ember';

export default Ember.View.extend({
	actions:{
		goto: function(dir) {
			this.sendAction('goto', dir);
		},
	}
});
