import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import HomeLayOut from './Layouts/HomeLayOut.jsx';
import Home from './pages/Home.jsx';
import CategoryNews from './pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
