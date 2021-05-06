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
`
const StyledContainer = styled.div`
    width: 100%;
    max-width: 1209px;
	margin: 0 auto;
    display:flex;
`

const LeftSection = styled.section`
    width: 50%;
    button{
        width: 300px;
    }
`
const RightSection = styled.section`
    width: 50%;
    position:relative;
`

const MainTitle = styled.h1`
    max-width: 439px;
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.h1};
    line-height: 76px;
    margin-bottom: 32px;
`
const SecondTitle = styled.h2`
    color: ${themeColors.lightGray};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    width: 350px;
    line-height: 19px;
    margin-bottom: 40px;

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

