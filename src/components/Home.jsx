import CardPizza from './CardPizza';
import { pizzas } from '../assets/pizzas';
import './Home.css';
const Home = () => {
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
