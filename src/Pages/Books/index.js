import React, { useState, useEffect } from 'react';
import logoImage from '../../Assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';
import api from '../../Services/api';
import './style.css';


export default function Book() {

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    const accessToken = localStorage.getItem('accessToken');
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    useEffect(() => {

        fetchMoreList();
    }, [accessToken]);


    async function fetchMoreList() {
            const response = await api.get(`api/Book/v1/asc/4/${page}`, authorization);
                setBooks([...books, ...response.data.list]);
                setPage(page + 1); 
          
    }


    async function Logut() {
        try {
            await api.get(`api/auth/v1/revoke`, authorization);

            localStorage.clear();
            navigate('/');

        } catch (error) {
            alert('Error Logout book, try again!');
        }
    }


    async function EditBook(id) {
        navigate(`/new/${id}`);
    }


    async function DeleteBook(id) {
        try {
            await api.delete(`api/Book/v1/${id}`, authorization);

            setBooks(books.filter(book => book.id !== id));
        } catch (error) {
            alert('Error deleting book, try again!');
        }
    }

    return (
        <div className='book-container'>
            <header>

                <img src={logoImage} alt="logo" />
                <span>Welcome, <strong>{userName.toUpperCase()}</strong>!</span>

                <Link className='button' to='/new/0'>Add new Book</Link>
                <button onClick={Logut} type='button'>
                    <FiPower size={18} color='#2a20e0' />
                </button>

            </header>

            <h1>Registered Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>Title:</strong>
                        <p>{book.title}</p>

                        <strong>Author:</strong>
                        <p>{book.author}</p>

                        <strong>Price:</strong>
                        {/*formatando para moeda brasil*/}
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>

                        <strong>Release Date</strong>
                        {/*<p>{new Date(book.launchDate).toLocaleDateString('pt-BR')}</p> um modelo para formatar data*/}
                        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

                        <button onClick={() => EditBook(book.id)} type='button'>
                            <FiEdit size={20} color='#2a20e0' />
                        </button>

                        <button onClick={() => DeleteBook(book.id)} type='button'>{/*se não colocar como função anonima , ira deletar tudo*/}
                            <FiTrash2 size={20} color='#2a20e0' />
                        </button>
                    </li>
                ))}
            </ul>
            
            <button type='button' className='button_load' onClick={fetchMoreList}>Load more</button>
        </div>
    );
}