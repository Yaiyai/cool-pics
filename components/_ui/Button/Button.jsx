import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { themeColors, themeFont } from '../../../theme/theme.styled'


const StyledButton = styled.button`
    outline: none;
    border: none;
    padding: 18px 20px;
    border-radius: 8px;
    text-transform: uppercase;
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    box-sizing: border-box;

`

const PrimaryButton = styled(StyledButton)`
    color: black;
    background-color: ${themeColors.primary};
    &:hover{
        background-color: #BCE0FD;
    }
`
const SecondaryButton = styled(StyledButton)`
    color: white;
    background-color: black;
    &:hover{
        background-color: ${themeColors.gray};
    }
`
const OutlinedButton = styled(StyledButton)`
    background: #FFFFFF;
    border: 1px solid #111111;
`

const Button = React.memo(({ literal, method, buttonStyle }) => {

    const styledButtons = {
        primary: <PrimaryButton onClick={ method }>{ literal }</PrimaryButton>,
        secondary: <SecondaryButton onClick={ method }>{ literal }</SecondaryButton>,
        outlined: <OutlinedButton onClick={ method }>{ literal }</OutlinedButton>
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
