import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import { useNavigate } from 'react-router-dom';
import api from '../../Services/api';

import logoImage from "../../Assets/logo.svg";
import "./styles.css";

export default function NewBook() {

    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    const { bookId } = useParams();

    const addBook = "Add Book";
    const updateBook = "Update Book";

    const accessToken = localStorage.getItem('accessToken');

    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    useEffect(() =>{
        if(bookId === '0') return;
        else loadBook();
    }, [bookId]);

    async function loadBook() {
        try {

            const response = await api.get(`api/book/v1/${bookId}`, authorization);

            let ajustedate = response.data.launchDate.split('T', 10)[0];{/*Ajuste de data*/}

            setId(response.data.id);
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setLaunchDate(ajustedate);
            setPrice(response.data.price);

        } catch (error) {
            console.log(error);
            
        }
    }

    async function SaveOrUpdate(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price
        };

        try {
            if (bookId == '0') {
                await api.post('api/Book/v1', data, authorization

                );
            }else{
                data.id = id;
                await api.put(`api/Book/v1/`, data, authorization);
            }

            
            navigate('/books');

        } catch (error) {
            alert('Error creating book, try again!');
            
        }
    }

    return (

        <div className="newbook-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="logo" />
                    <h1>New Book</h1>
                    <p>Enter the book information and click on '{bookId === '0' ? addBook : updateBook}'</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#2a20e0" />
                        Home
                    </Link>
                </section>

                <form onSubmit={SaveOrUpdate}>
                    <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
                    <input type="date" value={launchDate} onChange={e => setLaunchDate(e.target.value)} />
                    <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

                    <button className="button" type="submit">{bookId === '0' ? addBook : updateBook}</button>
                </form>
            </div>
        </div>
    );
}

