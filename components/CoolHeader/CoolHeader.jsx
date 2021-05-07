import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../_ui/Button/Button'
import { themeColors, themeFont } from '../../theme/theme.styled'
import HeaderCard from '../_ui/HeaderCard/HeaderCard'

const HeaderSection = styled.section`
    background-color: black;
    position: relative;
    display: flex;
    padding: 242px 0;
    color: white;
    font-family: ${themeFont.family};
    border-radius: 0px 0px 40px 40px;
    margin-bottom: 144px;
    > div{
        display: flex;
    }
    @media (max-width: 575px) {
        padding-top:106px;
        padding-bottom: 294px;
    };
`
const StyledContainer = styled.div`
    width: 100%;
	margin: 0 auto;
    display:flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    align-items: flex-start;
    @media (min-width: 1300px) {
        max-width: 1209px;
    };
    @media (min-width: 1199px) and (max-width: 1299px) {
        max-width: 1150px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 920px;
    }
    @media (min-width: 769px) and (max-width: 991px) {
        max-width: 750px;
    }
    @media (min-width: 576px) and (max-width: 768px) {
        max-width: 530px;
    }
    @media (min-width: 400px) and (max-width: 575px) {
        max-width: 382px;
    };
    @media (max-width: 399px) {
        max-width: 300px;
    };
    
`

const LeftSection = styled.section`
    width: 50%;
    button{
        width: 300px;
        @media (max-width: 575px) {
            width: 200px;
            padding: 15px 0 14px;
        }
    }
    @media (max-width: 575px) {
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
    @media (max-width: 575px) {
        width:100%;
    };
`

const MainTitle = styled.h1`
    max-width: 439px;
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h1};
    line-height: 76px;
    margin-bottom: 32px;
    @media (max-width: 575px) {
        font-size: 32px;
        line-height: 38px;
    };

`
const SecondTitle = styled.h2`
    color: ${themeColors.lightGray};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    width: 350px;
    line-height: 19px;
    margin-bottom: 40px;
    @media (max-width: 575px) {
        font-size: 16px;
        line-height: 19px;
    };


`


const CoolHeader = ({ title, subtitle, buttonLiteral, buttonMethod }) => {
    return (
        <HeaderSection>
            <StyledContainer>
                <LeftSection>
                    <MainTitle>{ title }</MainTitle>
                    <SecondTitle>{ subtitle }</SecondTitle>
                    <Button literal={ buttonLiteral } method={ buttonMethod } buttonStyle="primary" />
                </LeftSection>
                <RightSection>
                    <HeaderCard />
                </RightSection>
            </StyledContainer>
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

