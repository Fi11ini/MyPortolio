import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const SocialNetworks = () => {
    return (
        <StyledSocialNetworks>
            <Icon iconId={'github'}/>
            <Icon iconId={'github'}/>
            <Icon iconId={'github'}/>
        </StyledSocialNetworks>
    );
};

const StyledSocialNetworks = styled.div`
  background-color: #7fbbff;
  display: flex;
  justify-content: space-between;
`

