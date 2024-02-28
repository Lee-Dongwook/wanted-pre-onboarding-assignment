import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    idx: number;
    title: string;
}

interface TodoList {
    todoList: Todo[];
}

const initialState: TodoList = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodoTitle = action.payload;
            state.todoList.push({idx: state.todoList.length, title: newTodoTitle})
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const deleteIndex = action.payload;
            state.todoList = state.todoList.filter((todo) => todo.idx !== deleteIndex)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;