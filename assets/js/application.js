// Create a new instance of Ember.Application
window.Todos = Ember.Application.create();

// Tell Ember to extend DS.FixtureAdapter
// as ApplicationAdapter
Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});