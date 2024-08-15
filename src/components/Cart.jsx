import { useState } from 'react';
import { pizzaCart } from '../assets/pizzas.js';
import { toPesos } from '../helpers/toPesos.js';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const cartItems = cart.map((item) => (
        <article key={item.id} className="card">
            <div className="row cart-item">
                <div className="col-5">
                    <img src={item.img} alt="" className="cart-img" />
                </div>
                <div className="col-7 d-flex flex-column justify-content-between text-start">
                    <h3 className="fs-6 text-capitalize">{item.name}</h3>
                    <p>{toPesos(item.price)+' c/u'}</p>
                    <div className="d-flex justify-content-start align-items-center gap-1">
                        <span className="px-2 fs-6">{item.count}</span>
                        <button className="btn btn-danger border-0 btn-cart">-</button>
                        <button className="btn btn-danger border-0 btn-cart">+</button>
                    </div>
                    <p className="text-end px-3 fs-small">{'Subtotal: ' + toPesos(item.price * item.count)}</p>
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
                <p className='py-2 px-4 fs-4 text-end'>Total: ###</p>
                <button className="btn btn-dark rounded-0 border-0 fs-3 p-3">Pagar ahora</button>
            </div>
        </aside>
    );
};
export default Cart;
