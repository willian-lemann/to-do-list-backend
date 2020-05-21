'use strict'

let TaskService = use('App/Services/TaskService');

class TaskController {
  constructor() {
    TaskService = new TaskService
  }

  async index() {
    await TaskService.index();
  }

  async store({ request }) {
    await TaskService.store(request);
  }

  async show({ params }) {
    await TaskService.show(params);
  }

  async update({ params, request }) {
    await TaskService.update(params, request)
  }

  async destroy({ params }) {
    await TaskService.destroy(params);
  }
}

module.exports = TaskController
