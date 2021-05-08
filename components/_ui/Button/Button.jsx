import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { themeColors, themeFont } from '../../../theme/theme.styled'


const StyledButton = styled.button`
    outline: none;
    border: none;
    padding-top:18px;
    padding-bottom:19px;
    border-radius: 8px;
    text-transform: uppercase;
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    box-sizing: border-box;
    @media (max-width: 991px) {
        padding-top:12px;
        padding-bottom:12px;
    }
`

const PrimaryButton = styled(StyledButton)`
    color: black;
    background-color: ${themeColors.primary};
    &:hover{
        background-color: #BCE0FD;
        @media (max-width: 767px){
            background-color: ${themeColors.primary};
        }
    }
`
const SecondaryButton = styled(StyledButton)`
    color: ${({ active }) => active ? `black` : `white`};
    background-color: ${({ active }) => active ? `${themeColors.primary}` : `black`};
    &:hover{
        background-color: ${themeColors.gray};
        color: white;
        @media (max-width: 767px){
            background-color: ${({ active }) => active ? `${themeColors.primary}` : `black`};
            color: ${({ active }) => active ? `black` : `white`};
        }
    }
`
const OutlinedButton = styled(StyledButton)`
    background: #FFFFFF;
    border: 1px solid #111111;
    padding-top:17px;
    padding-bottom:18px;
    @media (max-width: 575px) {
        padding-top:14px;
        padding-bottom:15px;
    }
    &:hover{
        background-color: black;
        color: white;
        @media (max-width: 767px){
            background-color:#ffffff;
            color: black;
        }
    }
`

const Button = React.memo(({ literal, method, buttonStyle, active }) => {

    const styledButtons = {
        primary: <PrimaryButton active={ active } onClick={ method }>{ literal }</PrimaryButton>,
        secondary: <SecondaryButton active={ active } onClick={ method }>{ literal }</SecondaryButton>,
        outlined: <OutlinedButton active={ active } onClick={ method }>{ literal }</OutlinedButton>
    }

    const getButton = (style) => (styledButtons[style] || styledButtons.primary)

    return (
        getButton(buttonStyle)
    )
})

Button.propTypes = {
    literal: PropTypes.string.isRequired,
    method: PropTypes.func,
    buttonStyle: PropTypes.string,
}

export default Button
