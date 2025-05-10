import React, {useEffect, useState} from 'react';
import {ICar} from "../models/ICar.ts";
import {getCars} from "../car.service.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then(value => setCars(value))
    }, []);
    return (
        <div>
            {
                cars.map((car, index) => <CarComponent key={index} car={car}/>)
            }
            </div>
    );
};

export default CarsComponent;