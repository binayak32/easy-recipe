import styled from 'styled-components';
import Axios from 'axios';
import React, { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import searchIcon from './components/searchicon.svg';
import mainIcon from './components/pageicon.png';

import {Header, 
        NameComponent,
        SearchComponent, 
        SearchInput
       }from './components/header';

import {Container,
        RecipeListContainer,
        RecipeContainer,
        RecipeName,
        Ingredients,
        ExtendedRecipe
       }from './components/recipeContainer';

const appId = "0680a173";
const appKey = "a0d4502f3a340c9e642f69a93d4227d1";

const RecipeComponent = (props) => {
    const [show, setShow] = React.useState(false);
    const { recipeObj } = props;
    
    return(    
        <>
        <Dialog open = {show}>
        <DialogTitle id="alert-dialog-title">Ingredients</DialogTitle>
        <DialogContent>
        <table border = "1px">
            <thead>
                <th>Ingredients</th>
                <th>Weights</th>
            </thead>
        
            <tbody>
                {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                    <td>{ingredientObj.text}</td>
                    <td>{ingredientObj.weight}</td>   
                </tr>
                ))}
            </tbody>
        </table>
        </DialogContent>

        <DialogActions>
            <ExtendedRecipe onClick={() => window.open(recipeObj.url)}> See More </ExtendedRecipe>
            <Ingredients onClick={() => setShow(false)}> Close </Ingredients>
        </DialogActions>

        </Dialog>
            <RecipeContainer>
                <img src={recipeObj.image} height="200px" width = "250px"/>
                <RecipeName> {recipeObj.label} </RecipeName>
                <Ingredients onClick={() => setShow(true)}> Ingredients </Ingredients>
                <ExtendedRecipe onClick={() => window.open(recipeObj.url)}> See Complete Recipe </ExtendedRecipe>
            </RecipeContainer>   
        </>
    )
}

function App() {
    const [timeoutId, updateTimeout] = useState();
    const [recipeList, updateRecipeList] = useState([]);
    
    //updates/clears timer's id and calls fetch recipe on 100 milliseconds break
    const onTextChange = (event) => {
        clearTimeout(timeoutId);
        const timeOut = setTimeout(() => fetchRecipe(event.target.value), 180);
        updateTimeout(timeOut);
    }
    
    //gets the required data from API and uses async/await for https delay
    const fetchRecipe = async (searchString) => {
        const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${appId}&app_key=${appKey}`);
        updateRecipeList(response.data.hits);
    }

    return (
        <Container>
            <Header>
                <NameComponent>
                <img src = { mainIcon } height="40px" width = "40px"/>
                Easy Recipe
                </NameComponent>
                <SearchComponent>
                <img src= { searchIcon }/>
                <SearchInput placeholder="Search Recipe" onChange = {onTextChange}/>
                </SearchComponent>
            </Header>
        
            <RecipeListContainer>
            {recipeList.length 
            ? recipeList.map((recipeObj) => <RecipeComponent recipeObj={recipeObj.recipe}/>)
            : <img src = { mainIcon } height = "100px"/>}
            </RecipeListContainer>
        </Container>
    )
}

export default App;