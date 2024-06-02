import React from 'react';
import styled from "styled-components";
import {SocialNetworks} from "../../components/social/SocialNetworks";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <SocialNetworks/>
        </StyledHeader>



    );
};

const StyledHeader = styled.header`
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
`