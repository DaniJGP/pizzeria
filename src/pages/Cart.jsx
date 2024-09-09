import { useContext, useState } from 'react';
import { toPesos } from '../helpers/toPesos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';
import { getTotal } from '../helpers/getTotal';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    // Funciones para actualizar el carro con los botones - y +
    const morePizza = (id) => {
        let nuevaCart = [...cart]; // nuevaCart = cart previene la re-renderización 
        nuevaCart.find(item => item.id === id).count++;
        setCart(nuevaCart);
    };

    const lessPizza = (id) => {
        let nuevaCart = [...cart];
        nuevaCart.forEach((item, index) => {
            if (item.id === id && item.count > 0) {
                item.count--;
            }
            if (item.count === 0) {
                nuevaCart.splice(index, 1);
            }
        });
        setCart(nuevaCart);
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <main className="vh-100-navfooter d-flex flex-column gap-1 justify-content-center align-items-center py-3">
                    {cart.map((item, index) => (
                        <article key={index} className="card">
                            <div className="row cart-item">
                                <div className="col-4">
                                    <img src={item.img} alt="" className="cart-img" />
                                </div>
                                <div className="col-8 d-flex flex-column justify-content-center text-start">
                                    <h3 className="fs-5 text-capitalize">{item.name}</h3>
                                    <p>{toPesos(item.price) + ' c/u'}</p>
                                    <div className="d-flex justify-content-start align-items-center gap-1">
                                        <span className="px-2 fs-6">{item.count}</span>
                                        <button
                                            onClick={() => lessPizza(item.id)}
                                            className="btn btn-danger border-0 btn-cart"
                                        >
                                            {item.count > 1 ? (
                                                <i className="fa-solid fa-minus"> </i>
                                            ) : (
                                                <i className="fa-solid fa-trash"></i>
                                            )}
                                        </button>
                                        <button
                                            onClick={() => morePizza(item.id)}
                                            className="btn btn-danger border-0 btn-cart"
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <p className="m-0 align-self-end mx-4">
                                        {'Subtotal: ' + toPesos(item.price * item.count)}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                    <p className="my-4 fs-3">Total: {toPesos(getTotal(cart))}</p>
                    <button className="btn btn-dark rounded-0 border-0 fs-3 px-5 py-3">
                        Pagar ahora
                    </button>
                </main>
            </div>
            <Footer />
        </>
    );
};
export default Cart;
