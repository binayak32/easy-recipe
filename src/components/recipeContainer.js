import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;`

export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
gap: 20px;  
`

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
box-shadow: 0 3px 10px 0 #aaa;
width: 250px
`

export const RecipeName = styled.div`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;`

export const Ingredients = styled.span`
font-size: 18px;
border: solid 1px green;
color: green;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
text-align: center;
margin-bottom: 10px
`

export const ExtendedRecipe = styled(Ingredients)`
border: solid 1px #FFC300;
color: #FFC300;
`