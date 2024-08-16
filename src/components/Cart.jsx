import { useState } from 'react';
import { pizzaCart } from '../assets/pizzas.js';
import { toPesos } from '../helpers/toPesos.js';
import './Cart.css';

const Cart = ({total, setTotal}) => {
    // Inicializa estados del carro de compras y el total a pagar
    const [cart, setCart] = useState(pizzaCart);

    //Fucnción para actualizar el total
    const updateTotal = () => {
        let nuevoTotal = 0;
        cart.forEach((item) => (nuevoTotal += item.price * item.count));
        setTotal(nuevoTotal);
    };

    // Funciones para actualizar el carro con los botones - y +
    const addPizza = (id) => {
        let nuevaCart = cart;
        nuevaCart.forEach((item) => {
            if (item.id === id) {
                item.count++;
            }
        });
        setCart(nuevaCart);
        updateTotal();
    };

    const delPizza = (id) => {
        let nuevaCart = cart;
        nuevaCart.forEach((item, index) => {
            if (item.id === id && item.count > 0) {
                item.count--;
            }
            if (item.count === 0) {
                nuevaCart.splice(index, 1);
            }
        });
        setCart(nuevaCart);
        updateTotal();
    };

    // Array con cada item del carrito mapeado a la sintaxis jsx
    const cartItems = cart.map((item) => (
        <article key={item.id} className="card">
            <div className="row cart-item">
                <div className="col-5">
                    <img src={item.img} alt="" className="cart-img" />
                </div>

                <div className="col-7 d-flex flex-column justify-content-around text-start">
                    <h3 className="fs-6 text-capitalize">{item.name}</h3>
                    <p>{toPesos(item.price) + ' c/u'}</p>
                    <div className="d-flex justify-content-start align-items-center gap-1">
                        <span className="px-2 fs-6">{item.count}</span>
                        <button
                            onClick={() => delPizza(item.id)}
                            className="btn btn-danger border-0 btn-cart"
                        >
                            {item.count > 1 ? (
                                <i className="fa-solid fa-minus"></i>
                            ) : (
                                <i className="fa-solid fa-trash"></i>
                            )}
                        </button>
                        <button
                            onClick={() => addPizza(item.id)}
                            className="btn btn-danger border-0 btn-cart"
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <p className="text-end px-3 fs-small m-0">
                        {'Subtotal: ' + toPesos(item.price * item.count)}
                    </p>
                </div>
            </div>
        </article>
    ));

    return (
        <aside>
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="shoppingCart"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h2 className="offcanvas-title" id="offcanvasRightLabel">
                        Carrito de compras
                    </h2>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>

                <div className="offcanvas-body d-flex flex-column gap-1">{cartItems}</div>
                <p className="py-2 px-4 fs-4 text-end">Total: {toPesos(total)}</p>
                <button className="btn btn-dark rounded-0 border-0 fs-3 p-3">Pagar ahora</button>
            </div>
        </aside>
    );
};

export default Cart;
