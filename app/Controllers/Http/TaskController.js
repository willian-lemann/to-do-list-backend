'use strict'

const Task = use('App/Models/Task');

class TaskController {

  async index() {
    const tasks = await Task.all().orderBy('created_at', 'desc');
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




  async update({ params, request }) {
    const task = await Task.findOrFail(params.id);
    const data = request.only(['done']);

    task.merge(data);
    await task.save();
  }


  async destroy({ params }) {
    const task = await Task.findOrFail(params.id);
    if (task == null) {
      return
    }
    await task.delete();
  }
}

module.exports = TaskController
