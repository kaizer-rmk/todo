let todos = getSavedTodos()

const filters ={
    searchText: '',
    hideCompleted: false
}

renderTodos(todos,filters)

//Search Input
document.querySelector('#searchInput').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

//Add Input from Form
document.querySelector('#new-todo').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        id:uuidv4(),
        text:e.target.elements.addInput.value,
        completed:false
    })
    saveTodos()
    renderTodos(todos,filters)
    e.target.elements.addInput.value=''
})

//Hide Completed
document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})

document.querySelector('#filterBy').addEventListener('click',function(e){
    console.log(e.target.value)
})



