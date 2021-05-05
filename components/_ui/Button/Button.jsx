import React, { memo } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { themeColors, themeFont } from '../../../theme/theme.styled'


const StyledButton = styled.button`
    outline: none;
    border: none;
    padding: 18px 20px;
    border-radius: 8px;
    color: ${({ buttonStyle }) => buttonStyle === 'secondary' ? `white` : `black`};
    text-transform: uppercase;
    font-family: ${themeFont.family};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    background-color: ${({ buttonStyle }) => buttonStyle === 'secondary' ? `${themeColors.gray}` : `${themeColors.primary}`};
    
    &:hover{
        background-color: ${({ buttonStyle }) => buttonStyle === 'secondary' ? `${themeColors.gray}` : `#BCE0FD`};

    }
`

const Button = ({ literal, method, buttonStyle }) => {

    return (
        <StyledButton onClick={ method } buttonStyle={ buttonStyle } >
            {literal }
        </StyledButton>
    )
}

Button.propTypes = {
    literal: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string,
}

export default Button
