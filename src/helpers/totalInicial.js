import { pizzaCart } from "../assets/pizzas";

export const totalInicial = () => {
    let n = 0
    pizzaCart.forEach((item) => {
        n += item.price * item.count;
    });
    return n;
};
