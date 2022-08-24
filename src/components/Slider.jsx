import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow =styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction==="left" && "10px" };
    Right: ${props=> props.direction==="right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper =styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex* -100}vw);
     transition: all 1.5s ease;
`
const Slide =styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    
`
const ImageContainer =styled.div`
    height: 100%;
    flex: 1;
`
const Image =styled.img`
    height: 80%;
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {

const [slideIndex,SetSlideIndex]=useState(0);
const handleClick= (direction)=>{
if(direction==="left"){
  SetSlideIndex(slideIndex > 0 ? slideIndex-1:2 );
}
else{
  SetSlideIndex(slideIndex < 2 ? slideIndex+1:0 );
}
}

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>{

          return (<Slide key={item.id} bg={item.bg}>
          <ImageContainer>
            <Image src={item.img} alt="image"/>
          </ImageContainer>
          <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
           <Button>SHOP NOW </Button>
          </InfoContainer>
          </Slide>)
        })}
        
       </Wrapper>

      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider;
