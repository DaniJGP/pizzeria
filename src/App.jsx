import { Route, Routes } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/pizza/p001" element={<Pizza />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CartProvider>
        </>
    );
}

export default App;
