import { createBrowserRouter, Navigate } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Contact from '../../components/Contact/Contact';
import Product from '../../components/Prodcuts/Prodcut';
import ProductDetail from '../../components/Prodcuts/ProductDetail';
import Error from '../../components/Error/Error';
import Cart from '../../components/Cart/Cart';
import ThankYou from '../../components/ThankYou/ThankYou';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />, // Redirect root to /login
      },
      {
        path: '/home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: '/product',
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        // Make sure the dynamic route works for product details by passing `:id` as a parameter
        path: '/product/:id',
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        ),
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: '/thank-you',
        element: (
          <PrivateRoute>
            <ThankYou />
          </PrivateRoute>
        ),
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
