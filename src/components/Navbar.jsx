import { Link } from 'react-router-dom';
import { toPesos } from '../helpers/toPesos';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { getTotal } from '../helpers/getTotal';
import { UserContext } from '../contexts/UserContext';


const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    return  (
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
                                <Link to="/profile" className="nav-link">
                                    🔓 Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={logout} className="nav-link">
                                    🔒 Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
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
                    🛒 Total: {toPesos(getTotal(cart))}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
