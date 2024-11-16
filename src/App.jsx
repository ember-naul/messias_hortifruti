import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoCompras from './pages/CarrinhoCompras';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<CarrinhoCompras />} />
                </Routes>
            <Footer />
        </Router>
    );
}

export default App;
