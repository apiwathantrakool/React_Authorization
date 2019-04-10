import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/nav";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux/Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Nav />
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
