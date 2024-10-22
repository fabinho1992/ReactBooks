import React from 'react';
import './Styles.css';

import logoImage from '../../Assets/logo.svg';
import padLock from '../../Assets/padlock.png';

export default function Login() {
    return (
        <div className='login-container'>
            <section>
                <img src ={logoImage} alt="logo"/>
                <h1>Access your Account</h1>
                <form>
                    <input placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <button className='button' type='submit'>Login</button>
                </form>
            </section>

            <img className='padlock' src ={padLock} alt="login"/>

        </div>
        
    );
}