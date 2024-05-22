// product.jsx
import { useSelector } from 'react-redux';
import './product.css';

export default function Product() {
    const { totalAmount, discountAmount, gstAmount, afterTax } = useSelector((state) => state.cart);

    return (
        <div className="product-details">
            <h1>Product Details</h1>
            <div className='total-amount'>
                <h4>Total Amount:</h4>
                <span>{totalAmount.toFixed(2)}</span>
            </div>
            <div className='discount'>
                <h4>Discount 20%:</h4>
                <span>{discountAmount.toFixed(2)}</span>
            </div>
            <div className='total-price'>
                <h4>GST 18%:</h4>
                <span>{gstAmount.toFixed(2)}</span>
            </div>
            <div className='after-tax'>
                <h4>Total Price After Tax:</h4>
                <span>{afterTax.toFixed(2)}</span>
            </div>
        </div>
    );
}
