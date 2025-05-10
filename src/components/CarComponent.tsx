import React, {FC} from 'react';
import {ICar} from "../models/ICar.ts";

type CarPropsType = {
    car: ICar
}
const CarComponent:FC<CarPropsType> = ({car}) => {
    return (
        <div>
            ID: {car.id}. Brand: {car.brand} <br/>
            Price: {car.price}, Year: {car.year}
            <hr/>
            </div>
    );
};

export default CarComponent;