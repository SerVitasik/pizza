import { Children } from 'react';
import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={classes.Card}>{Children}</div>
    );
}

export default Card;