import React from 'react';
import Form from 'react-bootstrap/Form';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaUserLock } from 'react-icons/fa';

import './LoginForm.css';


function handleLogin({ username, password }) {

}

const LoginForm = () => (
    <div className='app__loginform app__bg flex__center section__padding'>
        <div className='app__box section__padding'>
            <form className='app__loginform-form' onSubmit={handleLogin}>
                <div class="app__loginform-header">
                    <p>You're almost there! Please log in to continue.</p>
                </div>
                <div class="app__loginform-formgrouping">
                    <BsFillPersonFill id='bspersonfill' />
                    <div class="form-group">
                        <label for="username" className='app__color-grey'>Username</label>
                        <input type="text" class="form-control" id="username" placeholder="username" />
                    </div>
                </div>
                <div className='app__loginform-formgrouping'>
                    <FaUserLock id="fauserlock" />
                    <div class="form-group">
                        <label for="password" className='app__color-grey'>Password</label>
                        <input type="password" class="form-control" id='password' placeholder='password'></input>
                    </div>
                </div>
                <button type="submit" class="custom__button app__loginform-login_button">Log in</button>
                <div className='app__loginform-footer'>
                    <a id="new_here">New here?&nbsp;</a>
                    <a href="">Create account</a>
                </div>
            </form>
        </div>
    </div>
);

export default LoginForm