import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./Components/nav";

ReactDOM.render(
    <BrowserRouter>
        <Nav />
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
