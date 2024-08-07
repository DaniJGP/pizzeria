const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav data-bs-theme="dark" className="navbar navbar-expand text-bg-dark">
            <div className="container-fluid px-2 max-w-xl">
                <a href="#" className="navbar-brand">
                    Pizzeria Mamma Mia!
                </a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Home
                        </a>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                🔓 Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                🔒 Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    🔐 Login
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    🔐 Register
                                </a>
                            </li>{' '}
                        </>
                    )}
                </ul>
                <button className="btn btn-dark">🛒 Total: ${total.toLocaleString('es-CL')}</button>
            </div>
        </nav>
    );
};

export default Navbar;
