export default class TodoList {
  constructor() {
  }

  addItem() {
    // add list item
    let li = document.createElement('LI');
    let input = document.getElementsByTagName('INPUT');
    let ul = document.getElementById('list');
    let textNode = document.createTextNode(input[0].value);
    li.appendChild(textNode);
    ul.appendChild(li);
    input[0].value = "";

    this.addButton();
  }

  removeItem() {

  }

  checkItem() {

  }

  // add button to remove item
  addButton() {

  }

}