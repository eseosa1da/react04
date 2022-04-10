
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import style from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const cartQty = items.reduce((currNumber, item)=>{
        return currNumber + item.amount;
    },0);

    

    const btnClasses = `${style.button} ${btnHighlighted ? style.bump : '' }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    },[items]);

return (

    <button className={btnClasses} onClick={props.onClick}>
        <span className={style.icon}>
            <CartIcon />

        </span>
        <span>
            Your Cart
        </span>
        <span className={style.badge}>{cartQty}</span>


    </button>


)

};

export default HeaderCartButton;