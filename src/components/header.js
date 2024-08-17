import styled from 'styled-components'

export const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
`

export const NameComponent = styled.div`
    display:flex;
    align-items: center;
`

export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`

export const SearchInput = styled.input`
border: none;
outline: none;
display: flex;
flex-direction: row;
font-size: 16px;
margin-left: 15px;
font-weight: bold
`