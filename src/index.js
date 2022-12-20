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
import LoginForm from './login_page/LoginForm';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<LoginForm/>} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

