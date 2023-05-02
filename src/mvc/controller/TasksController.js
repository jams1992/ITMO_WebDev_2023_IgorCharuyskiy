import TaskVO from '../model/VO/TaskVO';

class TasksController {
  #model;
  #networkService;
  constructor(model, networkService) {
    this.#model = model;
    this.#networkService = networkService;
  }
  async retrieveTasks() {
    try {
      this.#model.tasks = await this.#networkService
        .retrieveTasks('tasks')

        .then((rawTasks) => {
          if (rawTasks && rawTasks instanceof Array) {
            console.log('json', rawTasks);
            return rawTasks.map((json) => TaskVO.fromJSON(json));
          } else {
            window.alert('Problem with data parsing,try refresh later');
            return [];
          }
        })
        .catch((e) => {
          window.alert('Server error:' + e.toString());
          return [];
        });
    } catch (error) {
      throw error;
    }
  }

  deleteTask(taskId) {
    console.log('> TaskController -> deleteTask:taskId=', taskId);
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('>TaskController->deleteTask:response=', response.ok);
        if (response.ok) {
          this.#model.deleteTaskById(taskId);
        }
      })
      .catch((e) => {
        console.error('>TaskController->deleteTask:error=', e);
        throw new Error(e.toString());
      });
  }

  createTask(taskTitle, taskDate, taskTags) {
    console.log('> TaskController -> createTask');
    return fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: taskTitle,
        date: taskDate,
        tags: taskTags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('>TaskController->createTask:data=', data);
        const taskVO = TaskVO.fromJSON(data);
        this.#model.addTask(taskVO);
        return taskVO;
      })
      .catch((e) => {
        console.error('>TaskController->createTask:error=', e);
        throw new Error(e.toString());
      });
  }

  updateTaskById(taskId, taskTitle, taskDate, taskTag) {
    console.log('> TaskController -> editTask:taskId=', taskId);
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: taskTitle,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('>TaskController->createTask:data=', data);
        this.#model.updateTaskById(taskId, data);
        //this.#model.updateTask(taskVO);
        //return taskVO;
      })
      .catch((e) => {
        console.error('>TaskController->createTask:error=', e);
        throw new Error(e.toString());
      });
  }
}

export default TasksController;
