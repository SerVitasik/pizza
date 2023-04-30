function Dish(props) {
    return (
        <li>
            <img src={props.img} alt="dish" />
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div>Price: {props.price}$</div>
        </li>
    );
}

export default Dish;