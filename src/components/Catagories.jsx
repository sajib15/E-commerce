import React from 'react'
import styled from 'styled-components'
import { categoriesItem } from '../data';
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive';

const Container=styled.div`
    display: flex;
    padding:20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection:"column"})}
`
const Categories = () => {

  return <Container>
          {categoriesItem.map((item)=> {return (
             <CategoryItem item={item}/>
          )})};
         </Container>
  
};

export default Categories
