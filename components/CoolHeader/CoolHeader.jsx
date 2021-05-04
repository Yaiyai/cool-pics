import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '../_ui/Container/Container'
import Button from '../_ui/Button/Button'
import { themeColors, themeFont } from '../../theme/theme.styled'
import HeaderCard from '../_ui/HeaderCard/HeaderCard'

const HeaderSection = styled.header`
    background-color: black;
    position: relative;
    display: flex;
    padding: 242px 0;
    color: white;
    font-family: ${themeFont.family};
    > div{
        display: flex;
    }
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
            <Container>
                <LeftSection>
                    <MainTitle>{ title }</MainTitle>
                    <SecondTitle>{ subtitle }</SecondTitle>
                    <Button literal={ buttonLiteral } method={ buttonMethod } buttonStyle="primary" />
                </LeftSection>
                <RightSection>
                    <HeaderCard />
                </RightSection>
            </Container>
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

