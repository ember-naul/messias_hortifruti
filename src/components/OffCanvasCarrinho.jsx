import React, { useState, useEffect } from 'react';


const OffCanvasCarrinho = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
    };

    const removerItemCarrinho = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getItemNames = () => {
        return cartItems.map(item => item.nome).join(', ');
    };

    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-labelledby="My Cart">
            <div className="offcanvas-header justify-content-center">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Seu Carrinho</span>
                        <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {cartItems.length === 0 ? (
                            <li className="list-group-item text-center">Carrinho vazio</li>
                        ) : (
                            cartItems.map(item => (
                                <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                                    <div className="d-flex flex-column">
                                        <h6 className="my-0">{item.nome}</h6>
                                        <small className="text-body-secondary">{item.descricao}</small>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mx-3" style={{ width: '80px' }}>
                                        <span className="text-body-secondary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                            {item.quantidade}
                                        </span>
                                    </div>

                                   
                                    <div className="d-flex flex-column align-items-center justify-content-center mx-2">
                                        <span className="text-body-secondary" style={{ fontSize: '1.1rem' }}>
                                            R$ {item.preco.toFixed(2)} x {item.quantidade}
                                        </span>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm ms-2"
                                            onClick={() => removerItemCarrinho(item.id)}>
                                            Remover
                                        </button>
                                    </div>
                                </li>
                            ))
                        )}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (R$)</span>
                            <strong>{calcularTotal()}</strong>
                        </li>
                    </ul>
                    <a href="/carrinho">
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar a Finalização da Compra</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasCarrinho;
