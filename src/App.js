import React from 'react';
import './App.css';
import Main from "./modules/Main"
import store from "./redux/store"
import {Provider} from "react-redux"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Main/>
            </div>
        </Provider>

    );
}

export default App;
