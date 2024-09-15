import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/CartContext';
import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';

function App() {
    const { token } = useContext(UserContext);

    return (
        <>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
                    <Route
                        path="/register"
                        element={token ? <Navigate to="/" /> : <Register />}
                    />
                    <Route
                        path="/profile"
                        element={token ? <Profile /> : <Navigate to="/login" />}
                    />
                    <Route path='/pizza/:id' element={<Pizza />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CartProvider>
        </>
    );
}

export default App;
