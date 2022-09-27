import React, {useState} from "react";
import Form from "./Form.jsx";
import Todo from "./Todo.jsx";
import style from "./List.css";

function List (){
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

        const newTodos = [todo, ...todos];
        
        setTodos(newTodos);
};

const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTodos(prev => prev.map(item=>
        (item.id === todoId ? newValue: item))
        );
};

const removeTodo = id =>{
    const removeArr = [...todos].filter(todo=> todo.id !==id)

    setTodos(removeArr)
};

 

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    return(
       
        <div className="main container">
           <h1 className="text-main">
            ¿Qué piensas hacer hoy?</h1> 
           <Form onSubmit={addTodo}/>
           <Todo todos={todos} 
           completeTodo={completeTodo}
           removeTodo={removeTodo}
           updateTodo={updateTodo}/>
        </div>
    )
}

export default List;