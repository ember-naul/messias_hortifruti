// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import CarrinhoCompras from '../pages/CarrinhoCompras';

// function RoutesConfig() {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/carrinho" element={<CarrinhoCompras />} />
//             <Route path="*" element={<h2>Página não encontrada</h2>} />
//         </Routes>
//     );
// }

// export default RoutesConfig;
// src/routes/RoutesConfig.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Rota 404 para páginas não encontradas */}
            <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
    );
}

export default RoutesConfig;