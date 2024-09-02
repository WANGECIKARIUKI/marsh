import React from 'react';
import styled from 'styled-components';


function Card(props){
    const {Icon, disc,title} = props;
    return (
        <Container>
            <span style={{ color: "coral" }}> <Icon /> </span>
            <h2>{title}</h2>
            <p>{disc}</p>

        </Container>
    )
}

export default Card;

const Container = styled.div`
width:100%;
background: linear-gradient(159deg, black(45,45,58) 0%, black(43,43,53) 100%);
padding: 1rem;
text-align: center;
span{
font-size: 4rem;}

h2{
font-size: 1.2rem;
padding-bottom: 1rem;}
font-weight: bold;
color: black;

p{
font-size: 0.rem;}
`