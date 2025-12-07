import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import HomeLayOut from './Layouts/HomeLayOut.jsx';
import Home from './pages/Home.jsx';
import CategoryNews from './pages/CategoryNews.jsx';
import AuthLayout from './Layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './Routers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import NewsDetails from './pages/NewsDetails.jsx';
import PrivateRoutes from './Routers/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json'),
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: 'about',
    element: <AuthLayout></AuthLayout>,
  },
  {
    path: 'career',
    element: <AuthLayout></AuthLayout>,
  },
  {
    path: `/news-details/:id`,
    element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch('/news.json'),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
