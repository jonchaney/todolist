import TodoList from './TodoList.js';
document.addEventListener('DOMContentLoaded', () => {

  let list = new TodoList();
  
  window.list = list;

  console.log('content loaded');
});