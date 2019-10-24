let ADD_TODOLIST = 'todoliists/ADD_TODOLIST';


let initialState = {
    todoLists: [],

};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodoList],
            };
        default:
            return state;
    }
};

export default todoListReducer

export const addTodoList = newTodoList => ({type: ADD_TODOLIST, newTodoList})
