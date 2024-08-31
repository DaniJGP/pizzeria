export const toPesos = (price = 0) => {
    return '$' + price.toLocaleString('es-CL');
};