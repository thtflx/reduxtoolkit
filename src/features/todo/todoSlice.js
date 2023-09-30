import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Редюсер `addTodo` добавляет новую задачу в список todos, 
        // используя `nanoid()` для создания уникального идентификатора и `action.payload` для текста задачи. 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        // Редюсер `removeTodo` удаляет задачу из списка todos, используя `action.payload` для идентификатора задачи. 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

// выносим редюсеры `addTodo` и `removeTodo` в глобальную область видимости, чтобы мы могли ими пользоваться в других местах нашего приложения (например в компонентах, обрабатывающих добавление и удаление задач). 
export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;