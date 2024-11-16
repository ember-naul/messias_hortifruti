import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css'; // Estilos globais

import CepFormComponent from './CepFormComponent';

const CarrinhoHortifruti = () => {
  const [cartItems, setCartItems] = useState([]);

  // Carregar os itens do carrinho do localStorage quando o componente é montado
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Função para alterar a quantidade de um item
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Impede quantidade negativa ou zero
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantidade: newQuantity } : item
    );

    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Atualiza o localStorage
  };

  // Função para remover um item do carrinho
  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems)); // Atualiza o localStorage
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, product) => acc + product.preco * product.quantidade, 0).toFixed(2);
  };

  return (
    <section className="section h-100 gradient-custom">
      <Container className="py-5">
        <Row className="d-flex justify-content-center my-4">
          <Col md={8}>
            <Card className="mb-4">
              <Card.Header className="py-3">
                <h5 className="mb-0">Carrinho de Compras</h5>
              </Card.Header>
              <Card.Body>
                {/* Lista de itens no carrinho */}
                <div className="list-group">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <div className="flex-item flex-item-name">
                          <h5>{item.nome}</h5>
                          <small>{item.descricao}</small>
                        </div>
                        <div className="flex-item-remove d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() => handleQuantityChange(item.id, item.quantidade - 1)}
                          >
                            -
                          </button>
                          
                          {/* Campo de quantidade */}
                          <input
                            type="number"
                            className="form-control form-control-sm w-25"
                            value={item.quantidade}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            min="1"
                          />
                          
                          {/* Botão de incremento (+) */}
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => handleQuantityChange(item.id, item.quantidade + 1)}
                          >
                            +
                          </button>
                          
                          {/* Preço e botão de remover */}
                          <span className="me-2">R$ {item.preco.toFixed(2)}</span>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Header className="py-3">
                <h5 className="mb-0">Resumo do Carrinho</h5>
              </Card.Header>
              <Card.Body>
                <ul className="list-unstyled">
                  {cartItems.map((item) => (
                    <li key={item.id} className="d-flex justify-content-between">
                      <span>{item.nome} ({item.quantidade}x)</span>
                      <strong>R$ {item.preco.toFixed(2)}</strong>
                    </li>
                  ))}
                  <li className="d-flex justify-content-between" style={{ marginBottom: 20 }}>
                    <span>Total (R$)</span>
                    <strong>R$ {calculateTotal()}</strong>
                  </li>
                </ul>

                <div className="mb-4">
                  <CepFormComponent />
                </div>

                <form action="/">
                  <Button type='submit' variant="primary" className="w-100">
                    Finalizar Compra 
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarrinhoHortifruti;
