import React from 'react';
import mealsImg from '../../assets/img/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';



function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>PizzaLove</h1>
                <HeaderCartButton onOpenModal={props.onOpenModal}></HeaderCartButton>
            </header>
            {/* <div className={classes['main-image']}>
                <img src={mealsImg} alt="meals-bg" />
            </div> */}
        </React.Fragment>
    );
}

export default Header;