import React from 'react'
import TodoForm6 from './TodoForm6'
import TodoListSection6 from './TodoListSection6'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/day6/TodoApp6Context'

const TodoApp6 = () => {

    const {todoTitle, setTodoTitle, todoList, setTodoList,  search, setSearch, filter, setFilter, editMode, setEditMode, editableTodo, setEditableTodo,} = useContext(TodoContext)

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 mx-auto px-1">
                <div className="card shadow-sm border-0">
                    <div className="card-header bg-primary text-white text-center">
                        <h2 className="card-title mb-0">Todo App Day 6</h2>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center gap-3">
                        <TodoForm6/>
                        <TodoListSection6/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp6
