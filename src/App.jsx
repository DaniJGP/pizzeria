import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {
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
            )
        }
        else if (currentView === 'register') {
            return <Register />
        }
        else if (currentView === 'login') {
            return <Login />
        }
    }

    return (
        <>
            <Navbar setView={setView}/>
            {renderView(view)}
            <Footer />
        </>
    );
}

export default App;
