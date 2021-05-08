import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Button from '../_ui/Button/Button'
import HeaderContainer from '../_ui/Containers/HeaderContainer'
import HeaderCard from '../_ui/HeaderCard/HeaderCard'

import { themeColors, themeFont } from '../../theme/theme.styled'
import H1Title from '../_ui/Titles/H1Title'
import H2Title from '../_ui/Titles/H2Title'

const HeaderSection = styled.section`
    background-color: black;
    position: relative;
    display: flex;
    padding: 242px 0;
    color: white;
    font-family: ${themeFont.family};
    border-radius: 0px 0px 40px 40px;
    margin-bottom: 144px;
    @media (min-width: 769px) and (max-width: 991px) {
        padding-top:166px;
        padding-bottom: 68px;
    };
    @media (min-width: 576px) and (max-width: 768px) {
        padding-top:106px;
        padding-bottom: 294px;
    };
    @media (min-width: 400px) and (max-width: 575px) {
        padding-top:106px;
        padding-bottom: 294px;
        margin-bottom: 127px;
    };
    @media (max-width: 399px) {
        padding-top:106px;
        padding-bottom: 244px;
        margin-bottom:80px;
    };
`
const LeftSection = styled.section`
    width: 50%;
    h1{
        max-width: 439px;
        margin-bottom: 32px;
    }
    h2{
        width: 350px;
        margin-bottom: 40px;
        @media (max-width: 399px) {
            width: 240px;
        };
    }
    button{
        width: 300px;
        @media (max-width: 575px) {
            width: 200px;
            padding: 15px 0 14px;
        }
    }
    @media (max-width: 768px) {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        margin-bottom: 36px;
    };
    
`
const RightSection = styled.section`
    width: 50%;
    position:relative;
    @media (max-width: 768px) {
        width:100%;
    };
`

const CoolHeader = ({ title, subtitle, buttonLiteral, buttonMethod }) => {
    return (
        <HeaderSection>
            <HeaderContainer>
                <LeftSection>
                    <H1Title literal={ title } />
                    <H2Title literal={ subtitle } />
                    <Button literal={ buttonLiteral } method={ buttonMethod } buttonStyle="primary" />
                </LeftSection>
                <RightSection>
                    <HeaderCard />
                </RightSection>
            </HeaderContainer>
        </HeaderSection>
    )
}

CoolHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLiteral: PropTypes.string,
    buttonMethod: PropTypes.func
}

export default CoolHeader

