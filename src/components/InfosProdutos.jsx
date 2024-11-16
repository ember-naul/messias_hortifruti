import React, { useState } from 'react';

const InfosProdutos = () => {
    const produtos = [
        {
            id: 1,
            nome: "Banana",
            imagem: "/src/assets/images/thumb-bananas.png",
            descricao: "Banana Nanica",
            avaliacao: 4.5,
            preco: 4.59,
        },
        {
            id: 2,
            nome: "Bolacha de Canela",
            imagem: "/src/assets/images/thumb-biscuits.png",
            descricao: "Bolacha integral feita de 40% de canela",
            avaliacao: 4.4,
            preco: 6.99,
        },
        {
            id: 3,
            nome: "Picles",
            imagem: "/src/assets/images/thumb-cucumber.png",
            descricao: "Picles",
            avaliacao: 4.5,
            preco: 3.99,
        },
        {
            id: 4,
            nome: "Leite de caixinha 1L",
            imagem: "/src/assets/images/thumb-milk.png",
            descricao: "Leite Piracanjuba",
            avaliacao: 4.7,
            preco: 5.89,
        },
        {
            id: 5,
            nome: "Pão Francês",
            imagem: "/src/assets/images/ad-image-2.png",
            descricao: "R$ 15,00 / kg",
            avaliacao: 4.8,
            preco: 15.00,
        },
        {
            id: 6,
            nome: "Pasta de Amendoim",
            imagem: "/src/assets/images/post-thumb-2.jpg",
            descricao: "Pasta sem glúten",
            avaliacao: 4.8,
            preco: 20.00,
        },
        {
            id: 7,
            nome: "Ketchup Heinz",
            imagem: "/src/assets/images/product-thumb-2.png",
            descricao: "Ketchup mais famoso do mercado",
            avaliacao: 4.8,
            preco: 15.90,
        },
        {
            id: 8,
            nome: "Tomate Cereja",
            imagem: "/src/assets/images/thumb-tomatoes.png",
            descricao: "É tomate mano",
            avaliacao: 4.8,
            preco: 6.50,
        },
        {
            id: 9,
            nome: "Framboesas Frescas",
            imagem: "/src/assets/images/thumb-raspberries.png",
            descricao: "Framboesas deliciosas",
            avaliacao: 4.8,
            preco: 13.90,
        },
        {
            id: 10,
            nome: "Suco de Laranja Natural",
            imagem: "/src/assets/images/thumb-orange-juice.png",
            descricao: "glubglubglublgubglubglub",
            avaliacao: 4.8,
            preco: 6.90,
        },
    ];

    // Função para adicionar produto ao carrinho
    const adicionarAoCarrinho = (produto, quantidade) => {
        // Recupera o carrinho do LocalStorage (se houver)
        const carrinho = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Verifica se o produto já existe no carrinho
        const produtoExistente = carrinho.find(item => item.id === produto.id);
    
        // Se o produto já estiver no carrinho, apenas incrementa a quantidade
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            // Caso o produto não exista, adiciona ele com a quantidade selecionada
            carrinho.push({ ...produto, quantidade });
        }
    
        // Atualiza o LocalStorage com o novo carrinho
        localStorage.setItem('cart', JSON.stringify(carrinho));
    };
    

    const [produtosState, setProdutos] = useState(produtos);

    return (
        <section className="product-section">
            <div className="container">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="nav-juices">
                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            {produtosState.map(produto => (
                                <div className="col" key={produto.id}>
                                    <div className="product-item">
                                        <figure>
                                            <a href="index.html" title={produto.descricao}>
                                                <img src={produto.imagem} className="tab-image" alt={produto.descricao} />
                                            </a>
                                        </figure>
                                        <h3>{produto.nome}</h3>
                                        <span className="rating">
                                            <img width='18px' src='/src/assets/images/icons8-estrela-48.png'/>
                                            {produto.avaliacao}
                                        </span>
                                        <span className="price">R${produto.preco.toFixed(2)}</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button
                                                        type="button"
                                                        className="quantity-left-minus btn btn-danger btn-number"
                                                        data-type="minus"
                                                        onClick={() => {
                                                            const quantidade = (produto.quantidade || 1) > 1 ? (produto.quantidade - 1) : 1;
                                                            setProdutos(prevProdutos =>
                                                                prevProdutos.map(p =>
                                                                    p.id === produto.id ? { ...p, quantidade } : p
                                                                )
                                                            );
                                                        }}
                                                    > - </button>
                                                </span>
                                                <input
                                                    type="text"
                                                    id={`quantity-${produto.id}`}
                                                    name="quantity"
                                                    className="form-control input-number"
                                                    value={produto.quantidade || 1}
                                                    readOnly
                                                />

                                                <span className="input-group-btn">
                                                    <button
                                                        type="button"
                                                        className="quantity-right-plus btn btn-success btn-number"
                                                        data-type="plus"
                                                        onClick={() => {
                                                            const quantidade = (produto.quantidade || 1) + 1;
                                                            setProdutos(prevProdutos =>
                                                                prevProdutos.map(p =>
                                                                    p.id === produto.id ? { ...p, quantidade } : p
                                                                )
                                                            );
                                                        }}
                                                    > + </button>
                                                </span>
                                            </div>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => adicionarAoCarrinho(produto, produto.quantidade || 1)}
                                            >
                                                + Carrinho
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfosProdutos;
