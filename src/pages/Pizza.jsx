import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toPesos } from '../helpers/toPesos';
import './Pizza.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pizza = () => {
    // State para el objeto de nuesta pizza
    const [pizza, setPizza] = useState({});

    // Id de la pizza obtenida desde la url
    const { id } = useParams();

    // URL del endpoint 
    const pizzaURL = `http://localhost:5000/api/pizzas/${id}`;

    // Función asíncrona API pizza
    const callPizzaAPI = async () => {
        const res = await fetch(pizzaURL);
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
