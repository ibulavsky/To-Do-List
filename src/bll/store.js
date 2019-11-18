import {combineReducers, createStore} from "redux";
import listsReducer from "./ListsReducer";


// пока у меня будет один редьюсер,
// но оставляю возможность для расширения
let reducers = combineReducers({
    addListsForm: listsReducer,
});

let store = createStore(reducers);
export default store;
