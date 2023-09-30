import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch(state => state.todos);
    console.log(todos);

    return (
        <>
            <h1 className='font-mono mt-2'>Todos</h1>
            {todos.map((todo) => (
                <ul className='list-none'>
                    <li 
                        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-[100%] max-w-2xl'
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className='text-white bg-red-500 border-0 py-1 px-2 rounded text-[12px] font-mono'
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default Todos
