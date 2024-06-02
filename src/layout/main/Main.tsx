import React from 'react';
import styled from "styled-components";
import photo from '../../assets/images/myfoto.jpg'
import {FlexWrapper} from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'} >
                <Name>
                    Hi 👋,
                    My name is
                    Pavan MG
                    I build things for web
                </Name>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
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


