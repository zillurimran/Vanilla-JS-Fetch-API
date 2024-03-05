const dataFetch = new ImranHttp;
const listGroup = document.getElementById('list-group');


/**Get todos */
const getTodo = ()=>{
    dataFetch.get('https://jsonplaceholder.typicode.com/todos')
         .then((data) => {
            console.log(data)
            let output = '';
            data.forEach(element => {
                output += ` <li class="text-white rounded bg-lime-400">
                                <span class="p-3">${element.title}</span>
                            </li>`
                listGroup.innerHTML = output;
                console.log(output)
            });
        })
         .catch(err => console.log(err));
}

// getTodo();



/**post a todo */
const postTodo = ()=>{
    const formData = {
        "userId": 1,
        "title": document.getElementById('new_task').value,
        "completed": true
    }
    dataFetch.post('https://jsonplaceholder.typicode.com/todos', formData)
             .then((data) => {
                        const todoGroup = document.getElementById('todo-group');
                        todoGroup.classList.remove('hidden');
                        todoGroup.innerText = JSON.stringify(data, null,2)+ '\nData posted succesfully!';
                        console.log(data)
                    })
             .catch(err=> console.log(err));
}

// postTodo();



/**update TODO */

const updateTodo = ()=>{
    const formData ={
        "userId": 1,
        "title": 'Updated Title',
        "completed": false
    }

    dataFetch.post(`https://jsonplaceholder.typicode.com/todos/${id}`, formData)
             .then((data) =>{
                console.log(data)
             })
             .catch(err => console.log(err))
}

// updateTodo();



/**Delete todo */
const deleteTodo = ()=>{
    dataFetch.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
             .then((data)=>{
                console.log(data)
             })
             .catch((err)=>{
                console.log(err)
             })
}

// deleteTodo();