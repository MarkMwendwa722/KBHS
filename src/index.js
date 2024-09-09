import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/Homepage';
import Assignments from './pages/Assignments';

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Homepage/>,
      },
      {
        path: '/assignments',
        element: <Assignments/>,
      }
    ]
  },
  {
    path: '*',
    element: <h1 className='text-black'>This page does not exist!</h1>,
  },
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
