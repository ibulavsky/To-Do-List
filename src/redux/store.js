import {combineReducers, createStore} from "redux";
import todoListReducer from "./todolistReducer";


// пока у меня будет один редьюсер,
// но оставляю возможность для расширения
let reducers = combineReducers({
    todoLists: todoListReducer,
});

let store = createStore(reducers);
export default store;
