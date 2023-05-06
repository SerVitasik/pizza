import { useContext } from 'react';
import classes from './DishItem.module.css';
import DishItemForm from "./DishItemForm";
import CartContext from '../../store/cart-context';


function DishItem(props) {
    const cartCtx = useContext(CartContext);
    const addItemToCartHandler = amount => {
        cartCtx.addItem({ id: props.id, name: props.name, amount: amount, price: props.price });
    }

    return (
        <li className={classes.dish}>
            <div>
                <img className={classes.dish__image} src={props.img} alt="dish" />
                <h3 className={classes.dish__name}>{props.name}</h3>
                <div className={classes.dish__description}>{props.description}</div>
                <div className={classes.dish__price}>Price: ${props.price.toFixed(2)}</div>
            </div>
            <div>
                <DishItemForm onAddToCartProp={addItemToCartHandler} id={props.id} />
            </div>
        </li>
    );
}

export default DishItem;