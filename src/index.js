import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './index.css';
import App from './App';
import { Login } from './container';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

