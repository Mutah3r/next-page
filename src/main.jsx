import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'books',
        element: <Books />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <h1>404 ERROR!</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
