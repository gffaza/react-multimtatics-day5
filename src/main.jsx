import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Produk from './pages/Produk.jsx'
import DataProduk from './pages/DataProduk.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<NotFound/>,
    children: [
      {
        path:"/",
        element:<Home />,
      },

      {
        path:"/produk",
        element:<Produk />,
      },
      {
        path:"/dataproduk",
        element:<DataProduk />,
      },
      {
        path:"/about",
        element:<About />,
      }
    ],
  },
  // Add more routes as needed...
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
