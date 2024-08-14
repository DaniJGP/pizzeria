import { toPesos } from '../helpers/toPesos';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
    const ingredientsList = ingredients.map((ingredient) => (
        <li key={ingredient} className="list-group-item rounded-pill">
            {ingredient}
        </li>
    ));
    const altText = 'fotografía de la pizza ' + name;

    return (
        <article className="card border-light-subtle">
            <img src={img} alt={altText} className="card-img-top" />
            <div className="py-3">
                <h2 className="text-start fs-5 fw-medium px-3 pb-3 border-bottom">
                    Pizza {name}
                </h2>
                {/* <p className="card-body text-start fw-light border-bottom border-light-subtle" >{desc}</p> */}
                <p className="fw-light fs-5">Ingredientes:</p>
                <ul className="list-group list-group-horizontal flex-wrap gap-3 justify-content-center px-3 pb-3 border-bottom rounded-0">
                    {ingredientsList}
                </ul>
                <p className="my-3 fw-medium fs-4">Precio {toPesos(price)}</p>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-light">Ver Más 👀</button>
                    <button className="btn btn-dark">Añadir 🛒</button>
                </div>
            </div>
        </article>
    );
};

export default CardPizza;
