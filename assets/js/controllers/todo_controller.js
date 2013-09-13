Todos.TodoController = Ember.ObjectController.extend({
	actions: {
		removeTodo: function(){
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		},
		editTodo: function(){
			this.set('isEditing', true);
		},
		// Set the controllers isEditing property to false
		// Commit all changes made to the todo
		acceptChanges: function(){
			this.set('isEditing', false);
			this.get('model').save();
		}
	},

	isEditing: false,

	isCompleted: function(key, value){
		var model = this.get('model');

		if (value === undefined){
			// property being used as getter
			return model.get('isCompleted');
		} else {
			// prop being used as setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});