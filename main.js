import 'uno.css';
import '@unocss/reset/tailwind.css';
import DOM from './src/constants/dom';
import { randomString } from './src/utils/stringUtils.js';

const KEY_LOCAL_TASKS = 'tasks';

const Tags = ['Web', 'Update', 'Design', 'Content'];

class TaskVO {
  static fromJSON(json) {
    return new TaskVO(json.id, json.title, json.date, json.tag);
  }
  constructor(id, title, date, tag) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.tag = tag;
  }
}

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateTask = getDOM(DOM.Template.TASK);
const domTaskColumn = domTemplateTask.parentNode;
domTemplateTask.removeAttribute('id');
domTemplateTask.remove();

const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);

const tasks = rawTasks
  ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json))
  : [];
tasks.forEach((taskVO) => renderTask(taskVO));
console.log('> tasks:', tasks);

domTaskColumn.onclick = (e) => {
  e.stopPropagation();
  console.log('domTaskColumn', e.target);
  renderTaskPopup('Update task', 'Update', () => {
    console.log('> Update task -> On Confirm');
  });
};
getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log('> domPopupContainer.classList');
  renderTaskPopup('Create task', 'Create', () => {
    console.log('> Create task -> On Confirm');
  });
};

function onCreateTaskClick() {
  const taskId = `task_${Date.now()}`;
  const taskTitle = randomString(12);
  const taskVO = new TaskVO(taskId, taskTitle, Date.now(), Tags[0]);

  renderTask(taskVO);
  tasks.push(taskVO);
  console.log('confirm', taskVO);
  localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
}

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  domTaskClone.dataset.id = taskVO.id;
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
}

async function renderTaskPopup(popupTitle, confirmText, confirmCallback) {
  const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
  domPopupContainer.classList.remove('hidden');

  const TaskPopup=(await import('./src/view/popup/TaskPopup')).default;
  const taskPopupInstance = new TaskPopup(
    popupTitle, confirmText, confirmCallback);
  
  console.log(TaskPopup);

  const domBtnClose = QUERY(
    domPopupContainer,
    DOM.Button.POPUP_CREATE_TASK_CLOSE
  );
  const domBtnConfirm = QUERY(
    domPopupContainer,
    DOM.Button.POPUP_CREATE_TASK_CONFIRM
  );
  const domTitle = QUERY(domPopupContainer, DOM.Popup.CreateTask.TITLE);

  domBtnConfirm.innerText = btnConfirmText;
  domTitle.innerText = popupTitle;

  const onClosePopup = () => {
    domPopupContainer.classList.add('hidden');
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  domPopupContainer.classList.remove('hidden');

  domBtnClose.onclick = onClosePopup;

  domBtnConfirm.onclick = () => {
    const taskTitle = randomString(12);
    const taskDate = randomString(12);
    const taskTags = Tags[0];
    confirmCallback && confirmCallback(taskTitle, taskDate, taskTags);
    onClosePopup();
  };
}
