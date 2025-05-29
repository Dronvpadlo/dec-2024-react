import React, {useContext, useEffect, useState} from 'react';
import {getItems} from "../../services/axiosService.ts";
import {IRecipe} from "../../models/IRecipe.ts";
import RecipeComponent from "./RecipeComponent/RecipeComponent.tsx";
import styles from './RecipesComponent.module.css'
import {ChangeThemeContext} from "../../context/ThemeContext.tsx";
import {useSearchParams} from "react-router";

const RecipesComponent = () => {

    const {theme} = useContext(ChangeThemeContext)
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [query] = useSearchParams();

    useEffect(() => {
        const page = +query.get('page');
        const limit = page*30-30
        getItems('/recipes?skip=' + limit.toString())
            .then(value => setRecipes(value.recipes))
    }, [query]);

    return (
        <div className={styles[theme]}>
            <div className={styles.section}>
            {
                recipes.map((recipe, index) => <RecipeComponent key={index} recipe={recipe}/>)
            }
            </div>
        </div>
    );
};

export default RecipesComponent;