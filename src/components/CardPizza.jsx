import { toPesos } from '../helpers/toPesos';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
    const { cart, setCart } = useContext(CartContext);

    const ingredientsList = ingredients.map((ingredient) => (
        <li key={ingredient} className="list-group-item rounded-pill">
            {ingredient}
        </li>
    ));

    const addPizza = (e, id, name, price, img) => {
        const index = cart.findIndex((item) => item.id === id);
        if (index === -1) {
            setCart([...cart, { id: id, name: name, price: price, count: 1, img: img }]);
            e.target.textContent = '¡Añadida!';
            e.target.classList.toggle('btn-dark');
            e.target.classList.toggle('btn-success');
        }
    };

    return (
        <article className="card border-light-subtle">
            <img src={img} alt={'pizza ' + name} className="card-img-top" />
            <div className="py-3">
                <h2 className="text-start text-capitalize fs-5 fw-medium px-3 pb-3 border-bottom">
                    {name}
                </h2>
                <p className="fw-light fs-5">Ingredientes:</p>
                <ul className="list-group list-group-horizontal flex-wrap gap-3 justify-content-center px-3 pb-3 border-bottom rounded-0">
                    {ingredientsList}
                </ul>
                <p className="my-3 fw-medium fs-4">Precio {toPesos(price)}</p>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-light">Ver Más 👀</button>
                    <button className="btn btn-dark" onClick={(e) => addPizza(e, id, name, price, img)}>
                        Añadir 🛒
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CardPizza;
