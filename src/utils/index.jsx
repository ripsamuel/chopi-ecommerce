/**
 *This function calculate totalPrice of a new order
 * @param {Array} products cartProduct : Array of objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)

    return sum
}