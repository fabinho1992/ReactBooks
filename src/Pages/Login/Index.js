import React, { useState } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';
import api from '../../Services/api';

import logoImage from '../../Assets/logo.svg';
import padLock from '../../Assets/padlock.png';

export default function Login() {

    const [userName, setUsername] = useState('');    
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        const data = {
            userName,
            password
        }

        try {

            const response = await api.post('api/auth/v1/signin', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            console.log(response.data);
            console.log('Redirecionando para /books...');

            navigate('/books');
          

        } catch (error) {

            alert('Login falied, try again!');

        }
    }

    return (
        <div className='login-container'>
            <section>
                <img src ={logoImage} alt="logo"/>
                <h1>Access your Account</h1>
                <form onSubmit={login}>
                    <input placeholder='Username' value={userName} onChange={e => setUsername(e.target.value)}/>
                    <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className='button' type='submit'>Login</button>
                </form>
            </section>

            <img className='padlock' src ={padLock} alt="login"/>

        </div>
        
    );
}