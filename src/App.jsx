import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import { useState } from 'react';
import { totalInicial } from './helpers/totalInicial';

function App() {
    // Estado del total del carrito para pasárselo a Navbar y Cart
    const [total, setTotal] = useState(totalInicial());

    // Estado para almacenar la vista actual
    const [view, setView] = useState('home');

    // Función que retorna los componentes que corresponden a cada vista
    const renderView = (currentView) => {
        if (currentView === 'home') {
            return (
                <>
                    <Header />
                    <Home />
                </>
            );
        } else if (currentView === 'register') {
            return <Register />;
        } else if (currentView === 'login') {
            return <Login />;
        } else if (currentView === 'pizza') {
            return <Pizza />;
        }
    };

    return (
        <>
            <Navbar view={view} setView={setView} total={total} />
            {renderView(view)}
            <Cart total={total} setTotal={setTotal} />
            <Footer />
        </>
    );
}

export default App;
