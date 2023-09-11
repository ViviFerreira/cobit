import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home';
import  Fase  from "./routes/Fase";
import  PageError  from "./components/PageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <PageError/>,
    children:[
      {
        path: "Home",
        element: < Home/>,
      },
      {
        path: "Fase",
        element: < Fase/>,
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

