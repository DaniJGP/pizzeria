const Navbar = ({ setView, view }) => {
    const total = 25000;
    const token = false;
    return (
        <nav data-bs-theme="dark" className="navbar navbar-expand text-bg-dark">
            <div className="container-fluid px-1 max-w-xl">
                <a href="/" className="navbar-brand">
                    Pizzeria Mamma Mia!
                </a>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setView('home')}>
                            Home
                        </button>
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
                                <button className="nav-link" onClick={() => setView('login')}>
                                    🔐 Login
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    href=""
                                    className="nav-link"
                                    onClick={() => setView('register')}
                                >
                                    🔐 Register
                                </button>
                            </li>
                        </>
                    )}
                </ul>
                {view === 'home' ? (
                    <button
                        className="btn btn-dark"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#shoppingCart"
                        aria-controls="shoppingCart"
                    >
                        🛒 Total: ${total.toLocaleString('es-CL')}
                    </button>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;

