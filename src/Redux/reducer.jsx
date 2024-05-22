// reducer.js
const initialState = {
    Product: [
        { id: 0, name: "Product 1", price: 100, qty: 0 },
        { id: 1, name: "Product 2", price: 95, qty: 0 },
        { id: 2, name: "Product 3", price: 56, qty: 0 }
    ],
    totalAmount: 0,
    gstAmount: 0,
    discountAmount: 0,
    afterTax: 0,
};

const calculateTotals = (products) => {
    const totalAmount = products.reduce((acc, product) => acc + product.price * product.qty, 0);
    const discountAmount = totalAmount * 0.20;
    const gstAmount = totalAmount * 0.18;
    const afterTax = totalAmount - discountAmount + gstAmount;
    return { totalAmount, discountAmount, gstAmount, afterTax };
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC_QUANTITY": {
            const updatedProducts = state.Product.map(product => 
                product.id === action.payload ? { ...product, qty: product.qty + 1 } : product
            );
            const totals = calculateTotals(updatedProducts);
            return { ...state, Product: updatedProducts, ...totals };
        }
        case "DEC_QUANTITY": {
            const updatedProducts = state.Product.map(product => 
                product.id === action.payload && product.qty > 0 ? { ...product, qty: product.qty - 1 } : product
            );
            const totals = calculateTotals(updatedProducts);
            return { ...state, Product: updatedProducts, ...totals };
        }
        default:
            return state;
    }
};
