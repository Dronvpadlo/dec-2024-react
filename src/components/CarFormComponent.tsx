import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator.ts";
import {ICar, ICarPost} from "../models/ICar.ts";
import {postCar} from "../services/car.service.ts";

const CarFormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<ICarPost>({mode: 'all', resolver:joiResolver(carValidator)});
    const customHandler = (formDataProps: ICarPost)=>{
        if(formDataProps){
            postCar(formDataProps)
            console.log(formDataProps)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('brand')} placeholder={'brand'}/> <br/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('price')} placeholder={'price'}/> <br/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('year')} placeholder={'year'}/> <br/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                    <button>Post</button>
            </form>
        </div>
    );
};

export default CarFormComponent;