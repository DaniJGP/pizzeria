export const getTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        total += item.count * item.price;
    });
    return total;
};

export default getTotal;