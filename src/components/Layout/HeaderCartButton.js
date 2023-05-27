import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

function HeaderCartButton(props) {
    const [btnIsHighlited, setButtonIsHighlited] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);



    const btnClasses = `${classes.button} ${(btnIsHighlited === true) ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlited(true);
        const timer = setTimeout(() => {
            setButtonIsHighlited(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button onClick={props.onOpenModal} className={btnClasses}>
            <span className={classes.icon}><CartIcon /></span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;