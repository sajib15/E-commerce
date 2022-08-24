
import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import {Link} from "react-router-dom"
const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title=styled.h1`
   font-weight: 300;
   text-align: center;
`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`
const Button=styled.button`
    
`
const TopTexts=styled.div`
    ${mobile({display: "none"})}
`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
    
`
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info=styled.div`
    flex:3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}

`
const ProductDetails=styled.div`
    flex: 2;
    display: flex;


`
const Image=styled.img`
   width: 200px; 

`
const Details=styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`
const ProductName=styled.span`
   

`
const ProductId=styled.span`
    

`
const ProductColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color:${props=>props.color};

`

const ProductSize=styled.span`

`
const PriceDetaile=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ProductAmountContainer=styled.div`
 
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount=styled.div`
 font-size: 24px;
 margin: 5px;
 ${mobile({ margin: "5px 15px"})}

`
const ProductPrice=styled.div`
 font-size: 30px;
 font-weight: 200;
 ${mobile({ marginBottom: "20px"})}
 

`

const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgray; 
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`

const SummaryTitle=styled.h1`
    font-weight: 200;

`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type ==="total" && "500"};


`
const SummaryItemText=styled.span`
  

`
const SummaryItemPrice=styled.span`
    

`
const SummaryButton=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;

`






const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>
        Your Cart
        </Title>
        <Top><Link to="/ProductList"><TopButton>CONTINUE SHOPPING</TopButton></Link>
       <TopTexts>
         <TopText>Shopping Bag(2)</TopText>
         <TopText>Your Wishlist(0)</TopText>

       </TopTexts>

        <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            <Product>
            <ProductDetails>
              <Image src="https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc="/>
              <Details>
                <ProductName><b>Product:</b> Nike </ProductName>
                <ProductId><b>ID:</b> 879546311 </ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>Product:</b> 37.5</ProductSize>
              </Details>
            </ProductDetails>
            <PriceDetaile>
                <ProductAmountContainer>
                 <Add/>
                 <ProductAmount>2</ProductAmount>
                 <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$250</ProductPrice>
            </PriceDetaile>
            </Product>
            
            <Hr/>
            <Product>
            <ProductDetails>
              <Image src="https://i.ebayimg.com/images/g/ORAAAOSwmfFfetj0/s-l400.jpg"/>
              <Details>
                <ProductName><b>Product:</b> Nike </ProductName>
                <ProductId><b>ID:</b> 879546311 </ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>Product:</b> 37.5</ProductSize>
              </Details>
            </ProductDetails>
            <PriceDetaile>
                <ProductAmountContainer>
                 <Add/>
                 <ProductAmount>2</ProductAmount>
                 <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
            </PriceDetaile>
            </Product>
            </Info>
        <Summary><SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$550</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$-5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
            <SummaryItemText >Total</SummaryItemText>
            <SummaryItemPrice>$550</SummaryItemPrice>
        </SummaryItem>
        <SummaryButton>CHECKOUT NOW</SummaryButton>
        </Summary>

        </Bottom>   
      </Wrapper>


      <Footer/>
    </Container>
  )
}

export default Cart
