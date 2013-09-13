Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function(){
		this.$().focus();
	}
});

Ember.Handlerbars.helper('edit-todo', Todos.EditTodoView);