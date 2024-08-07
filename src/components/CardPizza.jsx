const CardPizza = ({name, price, ingredients, img}) => {

    const ingredientsList = ingredients.join(', ');
    const priceCL = price.toLocaleString('es-CL');
    const altText = "fotografía de la pizza " + name;

    return (
        <article className="card border-light-subtle">
            <img src={img} alt={altText} className="card-img-top"/>
            <div className="py-3">
                <h2 className="text-start fs-5 fw-medium px-3 pb-3 border-bottom border-light-subtle">Pizza {name}</h2>
                <p className="fw-light fs-5">Ingredientes:</p>
                <p className="card-text fs-small border-bottom pb-3">🍕 {ingredientsList}</p>
                <p className="fw-medium fs-4">Precio ${priceCL}</p>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-light">Ver Más 👀</button>
                    <button className="btn btn-dark">Añadir 🛒</button>
                </div>
            </div>
        </article>
    );
};

export default CardPizza;
