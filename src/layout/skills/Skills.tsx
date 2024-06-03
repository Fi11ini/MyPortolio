import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkils>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription> Technologies I’ve been working with recently</SectionDescription>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'html'} />
                <Skill iconId={'react'} />
                <Skill iconId={'js'} />
                <Skill iconId={'sass'} />
                <Skill iconId={'vs'} />
                <Skill iconId={'sass'} />
            </FlexWrapper>
        </StyledSkils>
    );
};

const StyledSkils = styled.section`
  background-color: bisque;
  min-height: 100vh;
`

const SectionDescription = styled.p`
  color: blue;
  text-align: center;
`

