const addTodo = document.querySelector('.addtodo');
const todosUl = document.querySelector('.todos');
const search = document.querySelector('.search input');

const creatTodoElement = (todo)=> {

    const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center text-light">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
             </li>
                 `;
        
                 todosUl.innerHTML+=html;
}
//adding new todos
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.addnewtodo.value.trim();

    if(todo === ''){
        alert('please type out something first');
    }else {
        creatTodoElement(todo);
        addTodo.reset();
    }
    
});
//add new to do when click + sign
addTodo.addEventListener('click', e => {
    const todo = addTodo.addnewtodo.value.trim();
    if(e.target.classList.contains('fa-circle-plus')){
        if(todo === ''){
            alert('please type out something first');
        }else {
            creatTodoElement(todo);
            addTodo.reset();
        }
    }
});
//removing Todos
todosUl.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


// search for mach todos

const filtredTodos = (term) => {

    Array.from(todosUl.children)
    .filter((todoItem) => !todoItem.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
        todo.classList.add('hidden');
    })

    Array.from(todosUl.children)
    .filter((todoItem) => todoItem.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
        todo.classList.remove('hidden');
    })
};

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();
    filtredTodos(term);
})
