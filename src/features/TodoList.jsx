import React from 'react'
import { QueryClient, useQuery } from 'react-query'
import { getTodos} from '../api/todosApi'
function TodoList() {
    const {
        isError,
        isLoading,
        data:todos
    } = useQuery('todos',getTodos)
    
    
    return (
        <div>TodoList</div>
    )
}

export default TodoList