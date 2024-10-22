import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import logoImage from "../../Assets/logo.svg";
import "./styles.css";

export default function NewBook() {
    return (
        <div className="newbook-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="logo" />
                    <h1>Add New Book</h1>
                    <p>Enter the book information and click on 'Add Book'</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#2a20e0" />
                        Home
                    </Link>
                </section>

                <form>
                    <input placeholder="Title" />
                    <input placeholder="Author" />
                    <input type="date" />
                    <input placeholder="Price" />
                    
                    <button className="button" type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

