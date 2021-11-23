//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
//Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//functions

function addTodo(e){
  //Prevent form from submiting
  e.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complet-btn");
  todoDiv.appendChild(completedButton);
  //Check Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv)
  //Clear todo input value
  todoInput.value = ""
}

function deleteCheck(e){
 const item = e.target;
 //DELETE TODO
 if(item.classList[0] === 'trash-btn'){
   const todo = item.parentElement;
   todo.remove();
 }
//CHECK MARK
if(item.classList[0] === "complet-btn"){
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}