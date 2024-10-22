/*Configurando rotas */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Index';
import Book from './Pages/Books/index';
import NewBook from './Pages/NewBook/index';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/books" element={<Book />} />
            <Route path="/new" element={<NewBook />} />
            </Routes>
        </BrowserRouter>
    );
}