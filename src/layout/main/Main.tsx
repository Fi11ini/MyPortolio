import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/myfoto.jpg'

export const Main = () => {
    return (
        <StyledMain>
            <h1>
                Hi 👋,
                My name is
                Pavan MG
                I build things for web
            </h1>
            <Photo src={photo} alt=""/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #a4dcdc;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
`

const Name = styled.h1`

`


