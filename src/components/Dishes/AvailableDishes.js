import DishItem from "./DishItem";
import classes from './AvailableDishes.module.css';

const DISHES = [
    {
        id: 'm1',
        name: 'Pizza1',
        description: 'Finest fish and veggies',
        price: 22.99,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
    {
        id: 'm2',
        name: 'Pizza2',
        description: 'A german specialty!',
        price: 16.5,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
    {
        id: 'm3',
        name: 'Pizza3',
        description: 'American, raw, meaty',
        price: 12.99,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
    {
        id: 'm4',
        name: 'Pizza4',
        description: 'Healthy...and green...',
        price: 18.99,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
    {
        id: 'm5',
        name: 'Pizza5',
        description: 'Healthy...and green...',
        price: 18.99,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
    {
        id: 'm6',
        name: 'Pizza6',
        description: 'Healthy...and green...',
        price: 18.99,
        img: 'https://i.pinimg.com/564x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg',
    },
];

function AvailableDishes() {
    return (
        <section className={classes.dishes}>
            <ul className={classes['dishes__list']}>
                {DISHES.map(dish => <DishItem key={dish.id} id={dish.id} name={dish.name} description={dish.description} price={dish.price} img={dish.img} />)}
            </ul>
        </section>
    );
}

export default AvailableDishes;