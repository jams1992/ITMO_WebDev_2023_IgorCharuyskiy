class TaskModel {
  #tasks = [];
  #updateCallBacks = [];
  constructor() {}

  set tasks(value) {
    this.#tasks = value;
    this.#updateCallBacks.forEach((c) => c(this.#tasks));
  }
  addUpdateCallback(updateCallback) {
    if (!updateCallback || !(updateCallback instanceof Function))
      throw new Error('Wrong callback:${updateCallback}');
    this.#updateCallBacks.push(updateCallback);
  }
}
export default TaskModel;
