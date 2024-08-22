import CardPizza from './CardPizza';
import { useState, useEffect } from 'react';
import './Home.css';
const Home = () => {
    // State que alojará el array de objetos de pizzas
    const [pizzas, setPizzas] = useState([]);

    // URL del endpoint de la API
    const pizzasURL = 'http://localhost:5000/api/pizzas';

    // Función asíncrona que actualiza el state
    const callPizzasAPI = async () => {
        const res = await fetch(pizzasURL);
        const data = await res.json();
        setPizzas(data);
    };

    useEffect(() => {
        callPizzasAPI();
    }, []);

    return (
        <>
            <main id="mainStore" className="py-4 px-2">
                <div className="max-w-xl mx-auto">
                    {pizzas.map((pizza) => (
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            desc={pizza.desc}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
