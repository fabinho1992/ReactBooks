import React from 'react';
import logoImage from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import './style.css';


export default function Book() {
    return (
        <div className='book-container'>
            <header>
                
                    <img src={logoImage} alt="logo" />
                    <span>Welcome, <strong>Leonardo</strong>!</span>
                
                    <Link className='button' to='/new'>Add new Book</Link>
                    <button type='button'>
                        <FiPower size={18} color='#2a20e0' />
                    </button>
                
            </header>

            <h1>Registered Books</h1>
            <ul>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
                <li>
                    <strong>Title:</strong>
                    <p>Teste</p>

                    <strong>Author:</strong>
                    <p>Teste</p>

                    <strong>Price:</strong>
                    <p>R$ 10,00</p>

                    <strong>Release Date</strong>
                    <p>01/01/2021</p>

                    <button type='button'>
                        <FiEdit size={20} color='#2a20e0' />
                    </button>

                    <button type='button'>
                        <FiTrash2 size={20} color='#2a20e0' />
                    </button>
                </li>
            </ul>

        </div>
    );
}