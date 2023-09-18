import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Protfolio from './component/Protfolio.jsx';
import Client from './component/Client.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/protfolio',
        element:<Protfolio></Protfolio>
      },
      {
        path: '/client',
        element: <Client></Client>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1240px] mx-auto text-white px-5'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
