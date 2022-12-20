import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ user }) => {

    if (user) {
        return (
            <div>
                <a href='#login' className='p__opensans'>User logged in</a>
            </div>
        )
    }
    else {
        //user not logged in
        return (
            <Link to={"/login"} href='#booktable' className='p__opensans'>Login / Registration</Link>
        )
    }
}

export default Login;