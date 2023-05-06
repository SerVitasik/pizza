import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {

    }

    const cartItemAddHandler = (item) => {

    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item.id)} />)}</ul>;
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = cartCtx.totalAmount;




    return (
        <Modal onCancel={props.onCancel}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCancel}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;