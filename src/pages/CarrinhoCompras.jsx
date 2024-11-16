import React, { useState, useEffect } from 'react';
import CepFormComponent from '../components/CepFormComponent';
import CarrinhoHortifruti from '../components/CarrinhoHortifruti';
import '../css/Carrinho.css';
function CarrinhoCompras() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  return (  
    <>
    <CarrinhoHortifruti/>
    </>
  );
}

export default CarrinhoCompras;
