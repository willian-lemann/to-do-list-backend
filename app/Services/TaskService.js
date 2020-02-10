'use strict'

const Task = use('App/Models/Task');

class TaskService {

    async index() {
        const tasks = await Task.query().orderBy('id', 'desc').fetch();
        return tasks;
    }

    async store(request) {
        const data = request.all();
        const task = await Task.create(data);
        return task;
    }
 
    async show(params) {
        const task = await Task.findOrFail(params.id);
        return task;
    }

    async update(params, request) {
        const task = await Task.findOrFail(params.id);
        const { done } = request.all();

        task.merge({ done: done });
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

module.exports = TaskService;