import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import axios from 'axios';

// axios.defaults.baseURL = process.env.NODE_ENV = 'development'
//   ? 'http://localhost:3000/api'
//   : '/';

axios.defaults.baseURL = 'http://localhost:3000';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path='product/:slugUrl' element={<ProductPage />} />
      {/* <Route path='dashboard' element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
