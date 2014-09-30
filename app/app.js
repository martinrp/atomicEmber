import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'atomic-ember', // TODO: loaded via config
  Resolver: Resolver
});

App.ArrayTransform = DS.Transform.extend({
	deserialize: function(serialized) {
		return (Ember.typeOf(serialized) === "array") ? serialized : [];
	},

	serialize: function(deserialized) {
		var type = Ember.typeOf(deserialized);
		if (type === 'array') {
			return deserialized;
		} else if (type === 'string') {
			return deserialized.split("\n").map(function(item) {
				return Ember.$.trim(item);
			}).filter(function(item) {
				return item.length > 0;
			});
		} else {
			return [];
		}
	}
});

loadInitializers(App, 'atomic-ember');

export default App;
