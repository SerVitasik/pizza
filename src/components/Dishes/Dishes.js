import React from "react";
import AvailableDishes from "./AvailableDishes";
import DishSummary from "./DishSummary";

function Dishes() {
    return (
        <React.Fragment>
            <AvailableDishes />
            <DishSummary />
        </React.Fragment>
    );
}

export default Dishes;