import {combineReducers, createStore} from "redux";
import addListsReducer from "../modules/addListsForm/bll/addListsReducer";


// пока у меня будет один редьюсер,
// но оставляю возможность для расширения
let reducers = combineReducers({
    addListsForm: addListsReducer,
});

let store = createStore(reducers);
export default store;
