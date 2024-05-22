// Card.jsx
import { useDispatch } from "react-redux";
import "./card.css";
import { DEC, INC } from "../Redux/action";

export default function Card({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="box-item" key={product.id}>
            <div className="img">100*100</div>
            <div className="Btns">
                <button onClick={() => dispatch(DEC(product.id))}>-</button>
                <span>{product.qty}</span>
                <button onClick={() => dispatch(INC(product.id))}>+</button>
            </div>
            <div className="total">
                <h4>Total</h4>
                <span>{product.price * product.qty}</span>
            </div>
        </div>
    );
}
