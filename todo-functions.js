console.log(uuidv4())
//Read ToDos Data from localStorage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null){
        return JSON.parse(todosJSON)
    }
    else{
        return []
    }
}

//Save Todos to local storage
const saveTodos = function(){
    localStorage.setItem('todos',JSON.stringify(todos))
}

//Render Todos
const renderTodos = function(todos,filters){

    //Search
    let filterTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filterTodos = filterTodos.filter(function(todo){
        if(filters.hideCompleted){
            return !todo.completed
        }
        else{
            return true
        }
    })

    //Incomplete ToDo
    const incompleteTodos = filterTodos.filter(function(todo){
        return !todo.completed
    })
    //Clear todos Elements
    document.querySelector('.todos').innerHTML=''
    
    //Summary
    document.querySelector('.todos').appendChild(generateSummaryDOM(incompleteTodos))

    //Taverse each todo
    filterTodos.forEach(function(todo){
        document.querySelector('.todos').appendChild(generateTodoDOM(todo))
    })
}

//Generate Todo DOM
const generateTodoDOM = function(todo){
    const root = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const remove = document.createElement('button')

    //Setup CheckBox
    checkBox.setAttribute('type','checkbox')
    root.appendChild(checkBox)
    //setup todo Text
    todoText.textContent = ` ${todo.text}  ` 
    root.appendChild(todoText)
    //setup remove Button
    remove.textContent = 'x'
    root.appendChild(remove)
    
    return root
}

//Generate Summary
const generateSummaryDOM = function(incompleteTodos){
    //Display Summary
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos Left.`
    return summary
}