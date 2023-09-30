import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault(); // Предотвращает перезагрузку страницы при отправке формы

        dispatch(addTodo(input)); // Отправка объекта задачи в действие Redux через функцию addTodo
        setInput(''); // Сброс значения, которое пользователь вводил в поле
    }

    return (
        <Fragment>
            <h1 className='mt-5 text-3xl font-mono font-bold text-indigo-700'>REDUX</h1>
            <form onSubmit={addTodoHandler} className='space-x-3 mt-2'>
                <input 
                    type='text'
                    className='bg-gray-800 rounded border border-gray-700 text-gray-100 py-1 px-3 leading-8'
                    placeholder='Enter a todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='text-white font-mono bg-indigo-500 border-0 py-2 px-6 rounded text-lg'
                >
                    Add ToDo
                </button>
            </form>
        </Fragment>
    )
}

export default AddTodo
