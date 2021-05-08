import React from 'react'
import PropTypes from 'prop-types'
import { themeColors, themeFont } from '../../../theme/theme.styled'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    color: ${themeColors.lightGray};
    font-weight: ${themeFont.weight.normal};
    font-size: ${themeFont.sizes.normal};
    line-height: 19px;
    @media (max-width: 575px) {
        font-size: 16px;
        line-height: 19px;
    };
`

const H2Title = ({ literal }) => {
    return (
        <StyledH2>
            {literal }
        </StyledH2>
    )
}

H2Title.propTypes = {
    literal: PropTypes.string.isRequired
}

export default H2Title
