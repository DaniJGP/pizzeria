import { useEffect, useState } from 'react';
import { toPesos } from '../helpers/toPesos';
import './Pizza.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pizza = () => {
    // State para el objeto de nuesta pizza
    const [pizza, setPizza] = useState({});

    // URL del endpoint sin la id
    const pizzaURL = 'http://localhost:5000/api/pizzas/';

    // Función asíncrona API pizza con la pizza P001 de default
    const callPizzaAPI = async (id = 'P001') => {
        const res = await fetch(pizzaURL + id);
        const data = await res.json();
        setPizza(data);
    };

    useEffect(() => {
        setPizza(callPizzaAPI());
    }, []);

    return (
        <>
            <Navbar />
            <div className="formMain d-flex flex-column justify-content-start align-items-center p-3 bg-light-subtle">
                <article className="card max-w-lg">
                    <img
                        src={pizza.img}
                        alt="foto de la pizza"
                        className="card-img-top pizza-img"
                    />
                    <div className="card-body">
                        <h2 className="text-capitalize display-2 fw-medium">{pizza.name}</h2>
                        <p className="fs-5">{pizza.desc}</p>
                        <p className="fs-4 fw-bold">
                            Ingredientes: {pizza.ingredients ? pizza.ingredients.join(', ') : null}
                        </p>
                        <p className="display-4">{toPesos(pizza.price)}</p>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    );
};
export default Pizza;
