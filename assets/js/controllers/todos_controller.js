Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function(){
			// Get the todo title set by the New Todo text field
			var title = this.get('newTitle');
			if ( !title.trim() ){ return; }

			// Create the new model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// Clear the New Todo text field
			this.set('newTitle', '');

			// Save the new model
			todo.save();
		},
		clearCompleted: function(){
			var completed = this.filterProperty('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},
	// Checking if all todos are completed
	allAreDone: function(key, value){
		// if no value is passed, populate the current value of the checkbox
		if (value === undefined){
			return !!this.get('length') && this.everyProperty('isCompleted', true);
		// if a user interacts with the checkbox, set the isCompleted property of each todo
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted'),
	// Determining if there are any completed todos
	hasCompleted: function(){
		return this.get('completed') > 0;
	}.property('completed'),
	// Get number of completed todos
	completed: function(){
		return this.filterProperty('isCompleted', true).get('length');
	}.property('@each.isCompleted'),
	// Return the number of todos whos isCompleted === false
	remaining: function(){
		return this.filterProperty('isCompleted', false).get('length');
	}.property('@each.isCompleted'),
	// If remaining === 1, return item. Else, return items
	inflection: function(){
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});