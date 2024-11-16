import React from 'react';
import Home from '../pages/Home';

import { createBrowserRouter } from 'react-router-dom';
import CarrinhoCompras from '../pages/CarrinhoCompras';

export const router = createBrowserRouter([

    {   
        path: "/",
        element: <Home/>
    },
    {
        path: "/carrinho",
        element: <CarrinhoCompras/>
    }
]);
