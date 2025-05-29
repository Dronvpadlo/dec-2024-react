import React, {FC, useContext} from 'react';
import {IRecipe} from "../../../models/IRecipe.ts";
import styles from './RecipeComponent.module.css'
import {ChangeThemeContext} from "../../../context/ThemeContext.tsx";

type RecipePropType = {
    recipe: IRecipe
}
const RecipeComponent:FC<RecipePropType> = ({recipe}) => {

    const {theme} = useContext(ChangeThemeContext)
    return (
        <div className={styles[theme]}>
            <h3>{recipe.name}</h3>
            <div className={styles.section}>
                <div>
                    <img className={styles.image} src={recipe.image} alt={recipe.name}/>
                </div>
                <div className={styles.infoBlock}><p>Ingredients:</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                    </ul>
                    <p>Instruction:</p>
                    <ul>
                        {recipe.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                    </ul>
                    <div>Prepare time: {recipe.prepTimeMinutes} minutes</div>
                    <div>Cook time: {recipe.cookTimeMinutes} minutes</div>
                    <div>Servings: {recipe.servings} items</div>
                    <div>Difficulty: {recipe.difficulty}</div>
                    <div>Cuisine: {recipe.cuisine}</div>
                    <div>Calories per serving: {recipe.caloriesPerServing} Ccal</div>
                    <p>Tags: </p>
                    <ul>
                        {recipe.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                    </ul>
                    <div>Rating: {recipe.rating}</div>
                    <div>Reviews: {recipe.reviewCount} watches</div>
                    <p>Meal Type: </p>
                    <ul>
                        {recipe.mealType.map((meal, index) => <li key={index}>{meal}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeComponent;