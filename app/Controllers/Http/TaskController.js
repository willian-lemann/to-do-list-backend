'use strict'

const Task = use('App/Models/Task');

class TaskController {

  async index() {
    const tasks = await Task.All();
    return tasks;
  }

  async store({ request }) {
    const data = request.only(['content', 'done']);
    const task = await Task.create(data);

    return task;
  }


  async show({ params }) {
    const task = await Task.findOrFail(params.id);
    return task;
  }




  async update({ params, request, response }) {
  }


  async destroy({ params }) {
    const task = await Task.findOrFail(params.id);
    await task.delete();
  }
}

module.exports = TaskController
