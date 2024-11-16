import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoCompras from './pages/CarrinhoCompras';
import Header from './components/Header';
import Footer from './components/Footer';
import { router } from './routes/RoutesConfig';


function App() {
    return (
        <>
            <Header />
                <RouterProvider router={router} />
            <Footer />
        </>
    );
}

export default App;
