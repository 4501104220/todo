import { createContext, useState } from "react";

const initialValues = {
    todos: [],
    createTodo: () => {}
};

const TodoContext = createContext(initialValues);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const createTodo = newTodo => {
        console.log(newTodo);
        setTodos([newTodo, ...todos]);
    };
    return (
        <TodoContext.Provider value={{
            todos,
            createTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
};

export {TodoProvider, TodoContext};
