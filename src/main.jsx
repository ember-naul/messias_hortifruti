import * as React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/vendor.css'
import './style.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header />
    <Home />
    <Footer /> */}
  </StrictMode>,
)


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App.jsx";




