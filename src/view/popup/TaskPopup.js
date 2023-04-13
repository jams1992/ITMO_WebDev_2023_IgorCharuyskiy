class TaskPopup {
    #title;
    #confirmText;
    #confirmCallback;
    constructor(title, confirmText, confirmCallback) {
      this.#title = title;
      this.#confirmText = confirmText;
      this.#confirmCallback = confirmCallback;
    }
  
    render() {
      return `
      <div class="flex flex-col relative min-w-[377px] bg-white p-6 rounded-2xl gap-y-4">
        <button class="absolute top-4 right-4" data-id="btnCloseCreateTaskPopup">
          <i class="i-material-symbols-cancel-outline block text-neutral-400 hover:text-neutral-800 text-2xl"></i>
        </button>
        <div class="flex flex-row">
          <span class="text-xl font-bold" data-id="title">Create task</span>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col w-full">
            <label class="ml-1 text-sm text-neutral-600" for="inpDate">Title: </label>
            <input
              class="bg-neutral-100 p-1.5 rounded w-full border-1 border-neutral-200"
              id="inpTitle"
              type="text"
              placeholder="e.g. Read books"
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col w-full">
            <label class="ml-1 text-sm text-neutral-600" for="inpDate">End date: </label>
            <input
              class="bg-neutral-100 p-1.5 rounded w-full border-1 border-neutral-200"
              type="date"
              id="inpDate"
              name="trip-start"
              min="2018-01-01"
            />
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex flex-col w-full">
            <label for="countries" class="ml-1 text-sm text-neutral-600">Select tag:</label>
            <select
              id="countries"
              class="bg-neutral-100 p-1.5 rounded w-full border-1 border-neutral-200 focus:border-none"
            >
              <option selected>Choose a tag</option>
              <option value="web">Web</option>
              <option value="update">Update</option>
              <option value="design">Design</option>
              <option value="content">Content</option>
            </select>
          </div>
        </div>
        <div class="flex flex-row pt-2">
          <button data-id="btnConfirmTaskPopup" class="bg-teal-600 text-white p-2 rounded-lg w-full font-bold">Create</button>
        </div>
      </div>
      `;
    }
  }
  
  export default TaskPopup;