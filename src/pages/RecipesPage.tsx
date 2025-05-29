import React from 'react';
import RecipesComponent from "../components/recipes/RecipesComponent.tsx";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const RecipesPage = () => {
    return (
        <div>
            <RecipesComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default RecipesPage;