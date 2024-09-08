import { Link } from 'react-router-dom';
import { toPesos } from '../helpers/toPesos';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
    const { cart, setCart } = useContext(CartContext);
    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.count * item.price;
        });
        return total;
    };
    const token = false;
    return (
        <nav data-bs-theme="dark" className="navbar navbar-expand text-bg-dark">
            <div className="container-fluid px-1 max-w-xl">
                <Link to="/" className="navbar-brand">
                    Pizzeria Mamma Mia!
                </Link>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a href="/profile" className="nav-link">
                                    🔓 Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/logout" className="nav-link">
                                    🔒 Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    🔓 Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    🔐 Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    🔐 Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
                <Link to="/cart" className="btn btn-dark">
                    🛒 Total: {toPesos(getTotal())}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
