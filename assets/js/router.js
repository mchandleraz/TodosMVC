// Router for TodoMVC App
// When the path is /, load todos template
Todos.Router.map(function(){
	this.resource('todos', { path: '/' }, function(){
		// additional child routes
		this.route('active');
		this.route('completed');
	});
});

// An Object with a model function that
// returns all existing todos
Todos.TodosRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('todo');
	}
});

// Child Routes
Todos.TodosIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('todos');
	}
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function(){
		return this.store.filter('todo', function(todo){
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render('todos/index', {controller: controller});
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});