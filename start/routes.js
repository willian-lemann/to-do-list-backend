'use strict'

const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.group(() => {
  Route.resource('tasks', 'TaskController').apiOnly();
});
