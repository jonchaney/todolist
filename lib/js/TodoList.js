export default class TodoList {
  constructor() {
  }

  addItem() {
    // create li element
    let li = document.createElement('LI');
    // get input object
    let input = document.getElementsByTagName('INPUT');
    // return if no input
    if (input[0].value === "") {
      return;
    }
    // get ul object
    let ul = document.getElementById('todo-list');
    // create text node and add to list
    let textNode = document.createTextNode(input[0].value);
    li.appendChild(textNode);
    ul.appendChild(li);
    // ad id attribute to list item
    li.setAttribute("id", input[0].value);
    // add remove button for element
    this.addButton(input[0].value);
    // reset text field to empty string
    input[0].value = "";
  }

  removeItem(id) {
    let element = document.getElementById("todo-list");
    element.parentNode.removeChild(id);
  }

  checkItem() {

  }

  addButton(id) {
    let button = document.createElement('input');
    button.type = 'button';
    button.innerHTML = 'delete';
    button.setAttribute('id', id);
    
    button.click(`${id}`);
    let div = document.getElementById('buttons');
    div.appendChild(button);
    console.log(button);
    
    
  }

}