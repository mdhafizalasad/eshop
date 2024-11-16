import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './route/Route/Route';
import CartProvider from './context/CartContext';  // Import CartProvider

function App() {
  return (
    <CartProvider>  {/* Wrap your app in CartProvider */}
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
